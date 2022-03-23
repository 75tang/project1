<template>
  <div>
    <div class="check_box">
        <span class="title">多选框</span>
        <div>
          <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange" :disabled="disabled">Check All</a-checkbox>
          <a-button type="primary" size="small" @click="toggleDisable">
            {{!disabled?'Disable':'Enable'}}
          </a-button>  
        </div>       
        <a-checkbox-group style="margin-top:10px" v-model="checkedList" :options="plainOptions" @change="onChange" ></a-checkbox-group> 
    </div>
    <div class="check_box">
        <span class="title">单选框</span>
        <a-radio-group :default-value="radioValue.value3" :options="plainOptions"></a-radio-group>
        <a-radio-group v-model="radioValue.value1" name="radioGroup" button-style="solid" style="margin-top:10px">
            <a-radio-button value='1'>Option1</a-radio-button>
            <a-radio-button value='2'>Option2</a-radio-button>
            <a-radio-button value='3' disabled>Option3</a-radio-button>
            <a-radio-button value='4'>Option4</a-radio-button>
        </a-radio-group>
    </div>
    <div class="check_box">
        <span class="title">对话框</span>
        <div>
            <a-button type="primary" class="modal_button" @click="showModal">
                Modal 
            </a-button>
            <a-modal
            :visible="visible"
            title="Radio-Button"
            @ok="handleOk"
            @cancel="handleCancel"
            >
            <template slot="footer">
                <a-button key="cancel" type="primary" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                提交
                </a-button>
            </template>
            <a-radio-group v-model="radioValue.value2">
                <a-radio :style="radioStyle" value='A'>A</a-radio>
                <a-radio :style="radioStyle" value='B'>B</a-radio>
                <a-radio :style="radioStyle" value='C'>C</a-radio>
                <a-radio :style="radioStyle" value='D'>D</a-radio>
            </a-radio-group>           
            </a-modal> 
            <a-button @click="info">
            Info
            </a-button>
            <a-button @click="success">
            Success
            </a-button>
            <a-button @click="error">
            Error
            </a-button>
            <a-button @click="warning">
            Warning
            </a-button>             
        </div>
    </div>
  </div>     
</template>
<script>
const plainOptions = ['options1','options2','options3'];
const defaultCheckedList=['options1','options2'];
import {Divider, Model} from 'ant-design-vue'
export default {
    data(){
        return{
            checkedList:defaultCheckedList,
            indeterminate:true,
            checkAll:false,
            plainOptions,
            disabled:false,
            visible:false,
            loading:false,
            radioValue:{
                value1:'1',
                value2:'A',
                value3:'options3',
            },
            radioStyle:{
                display:'block',
                height:'30px',
                lineHeight:'30px',
            }
        }
    },
    computed:{
        label(){
            const{disabeld}=this;
            return`${disabeld?'Disabeld':'Enabled'}`
        }
    },
    methods:{
        onChange(checkedList){
            this.indeterminate=!!checkedList.length&&checkedList.length<plainOptions.length
            this.checkAll = checkedList.length===plainOptions.length;
        },
        onCheckAllChange(e){
            Object.assign(this,{
                checkedList:e.target.checked? plainOptions:[],
                indeterminate:false,
                checkAll:e.target.checked,
            }

            );
        },
        toggleDisable(){
            this.disabled=!this.disabled
        },
        showModal(){
            this.visible=true;
        },
        handleOk(){
            this.loading=true;
            setTimeout(()=>{
                this.visible=false;
                this.loading=false;
            },500)
            
        },
        handleCancel(){
            this.visible=false
        },
        info(){
            const h=this.$createElement;
            this.$info({
                title:'notification',
                content:h('div',{},[
                    h('p','some messages..........'),
                    h('p','some messages..........')
                ]),onOk(){}
            })
        },
        success(){
            this.$success({
                title:'success',
                content:(
                    <div>
                        <p>some ...........</p>
                        <p>some.............</p>
                    </div>
                )
            })
        },
        error() {
        this.$error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
        },

        warning() {
        this.$warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
        },
    },
};
</script>

<style lang="scss" scoped>
.check_box{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-bottom: 1px solid #E9E9E9;
    .modal_button{
        size:small
    }
}
</style>