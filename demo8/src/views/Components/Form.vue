<template>
  <div>
      <a-form-model
      :v-model="formData"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="输入框">
            <a-input-group compact>
               <a-input style="width:70%" v-model="formData.value1" placeholder="请输入">
                   <a-icon slot="prefix" type="user"/>
               </a-input>
               <a-input-number 
                :min="0" :max="99" style="width:30%" 
                v-model="formData.value2"
                step="0.01"
                :formatter="value => `${value}$`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
               ></a-input-number> 
            </a-input-group>          
        </a-form-model-item>
        <a-form-model-item label="滑动输入条">
            <template>
                <div class="icon_wrapper">
                   <a-icon :style="{color:preColor}" type="frown-o"></a-icon>
                   <a-row gutter="10">
                       <a-col :span="20">
                          <a-slider id="test" :marks="marks" :step="null" v-model="formData.value" :disabled="disabled" :min="0" :max="100" @change="handleChange"/> 
                       </a-col>
                       <a-col :span="2">
                          <a-input-number v-model="formData.value" :disabled="disabled" :min="0" :max="100"></a-input-number>  
                       </a-col>                      
                   </a-row>                                      
                   <a-slider :marks="marks" range v-model="formData.value3" :min="0" :max="100" reverse></a-slider>
                   <a-slider :marks="marks" :tooltip-visible="true" :included="false" default-value="35"></a-slider>
                   <a-icon style="{color:nextColor}" type="smile-o"></a-icon> 
                </div>
            </template>
            
        </a-form-model-item>
        <a-form-model-item label="开关">
            <a-switch checked-children="Disabled" un-checked-children="Enabled" v-model="formData.value4" @click="onDisabled"></a-switch>
        </a-form-model-item>
      </a-form-model>
  </div>
</template>

<script>
export default {
    data(){
        return{
            marks:{
                0:'0℃',
                30:'30℃',
                60:'60℃',
                100:{
                    style:{
                        color:'#f50'
                    },
                    label:<strong>100℃</strong>
                },
            },
            labelCol:{span:5},
            wrapperCol:{span:15},
            disabled:false,
            min:0,
            max:100,
            formData:{
                value1:'',
                value2:'9',
                value3:['30','60'],
                value4:false,
                value:'30'
            }
        }
    },
    computed:{
        preColor(){
            const {min,max,value}=this;
            const mid =((max-min)/2).toFixed(5);
            return value>=mid?'':'rgba(0,0,0,.45)';
        },
        nextColor(){
            const {min,max,value}=this;
            const mid =((max-min)/2).toFixed(5);
            return value>=mid?'rgba(0,0,0,.45)':'';
        }
    },
    methods:{
        handleChange(value){
            this.value=value;
        },
        onDisabled(){
            this.disabled=!this.disabled
        }
    }
}
</script>

<style>
.icon_wrapper{
    position: relative;
    padding: 0px 30px;
}
.icon_wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}
.icon_wrapper .anticon:first-child {
  left: 0;
}

.icon_wrapper .anticon:last-child {
  right: 0;
}
</style>