<template>
  <a-form-model
  v-model="formSelect"
  >
      <a-form-model-item label="日期选择器">
          <div compact>
              <a-date-picker @change="onChange"></a-date-picker>
              <a-month-picker placeholder="Select month" @change="onChange"></a-month-picker>
          </div>
          <a-range-picker
          :placeholder="['选择开始日期','选择结束日期']"
          @change="onChange"
          ></a-range-picker>
          <div compact>
              <a-date-picker
              format="YYYY-MM-DD HH:mm:ss"
              :mode="mode"
              @openChange="handleOpenChange"
              @panelChange="handlePanelChange"
              :show-time="{defaultValue:moment('00:00:00','HH:mm:ss')}"
              :disabled-date="disabledDate"
              :disabled-time="disabledDateTime"
              placeholder="Disabled date"
              ></a-date-picker>
              <a-month-picker placeholder="Disabled datetime" :disabled-date="disabledDate">
                  <template slot="renderExtraFooter">
                      footer
                  </template>
                  <a-icon slot="suffixIcon" type="smile"></a-icon>
              </a-month-picker>
          </div>
      </a-form-model-item>
      <a-form-model-item label="时间选择器">
          <a-time-picker :open="open" @openChange="handleOpenChange2" use12-hours format="h:mm:ss a" @change="onChange">
              <a-button slot="addon" size="small" type="primary" @click="handleClose">ok</a-button>
          </a-time-picker>
          <a-time-picker :default-open-value="moment('00:00','HH:mm')" format="HH:mm" @change="onChange" :minute-step="15">
              <a-icon type="smile" slot="suffix"></a-icon>
          </a-time-picker>
      </a-form-model-item>
      <a-form-model-item label="选择器">
          <div compact>
            <a-select v-model="formSelect.value1" style="width:120px" @change="handleChange">
                <a-select-option value="sad" disabled>sad</a-select-option>
                <a-select-option value="smile">smile</a-select-option>
            </a-select>
            <a-select mode="tags" style="width:120px" placeholder="Tags Mode" @change="handleChange">
                <a-select-option v-for="i in 25" :key="(i+9).toString(36)+i">
                    {{(i+9).toString(36)+i}}
                </a-select-option>
            </a-select>              
          </div>
          <div>
              <a-select :default-value="provinceData[0]" style="width:120px" @change="handleProvinceChange">
                  <a-select-option v-for="province in provinceData" :key="province">
                      {{province}}
                  </a-select-option>
              </a-select>
              <a-select v-model="secondCity" style="width:120px">
                  <a-select-option v-for="city in cities" :key="city">
                      {{city}}
                  </a-select-option>
              </a-select>
          </div>
          <div>
              
          </div>

      </a-form-model-item>
  </a-form-model>
</template>

<script>
const provinceData=['浙江杭州','安徽合肥'];
const cityData={
    浙江杭州:['西湖区','余杭区','萧山'],
    安徽合肥:['瑶海区','包河区']
};
import moment from 'moment';
export default {
    data(){
        return{
            cityData,
            provinceData,
            cities:cityData[provinceData[0]],
            secondCity:cityData[provinceData[0]][0],
            formSelect:{
                value1:'smile',
                
                
            },
            mode:'time',
            open:false
        }
        
    },
    methods:{
        onChange(date,dateString){
            console.log(date,dateString);
        },
        moment,
        range(start,end){
            const result =[];
            for(let i =start;i<end;i++){
                result.push(i);
            }
            return result;
        },
        disabledDate(current){
            return current && current<moment().endOf('day')
        },
        disabledDateTime(){
            return{
                disabledHours:()=>this.range(0,24).splice(4,20),
                disabledMinutes:()=>this.range(30,60),
                disabledSeconds:()=>[55,56]
            }
        },
        handleOpenChange(open){
            if(open){
                this.mode='time';
            }
        },
        handleOpenChange2(open){
            this.open=open
        },
        handlePanelChange(mode){
            this.mode=mode;
        },
        handleClose(){
            this.open=false
        },
        handleChange(){
            console.log(`selected ${value}`)
        },
        handleProvinceChange(value){
            this.cities=cityData[value];
            this.secondCity=cityData[value] [0];
        }
    }
}
</script>

<style>

</style>