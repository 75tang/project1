<template>
  <div class="Refund">
    <div class="form_box">
      <div class="form_top">
        <div class="form_flex">
          <span>退款时间：</span>
          <el-date-picker
          v-model="formModel.dateTime"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          type="datetimerange"
          prefix-icon="false"
          >
          </el-date-picker>
        </div>
        <div class="form_flex">  
          退款状态：
          <el-select
          placeholder="请选择退款状态"
          v-model="formModel.refundState"
          >
            <el-option
             v-for="item in options1"
             :key="item.value"
             :value="item.value"
             :label="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="form_flex">  
              发货状态：
              <el-select
              placeholder="请选择发货状态"
              v-model="formModel.shoppingStatus"
              >
                <el-option
                v-for="item in options2"
                :key="item.value"
                :value="item.value"
                :label="item.label"
                ></el-option>
              </el-select>
        </div>
        <div class="form_flex">  
              原因：
              <el-select
              placeholder="请选择原因"
              v-model="formModel.reason"
              >
                <el-option
                v-for="item in options3"
                :key="item.value"
                :value="item.value"
                :label="item.label"
                ></el-option>
              </el-select>
        </div>
        <div class="form_flex">  
          分类：
          <el-select
          placeholder="请选择分类"
          v-model="formModel.type"
          >
            <el-option
             v-for="item in options4"
             :key="item.value"
             :value="item.value"
             :label="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="form_flex">
          <el-input
            v-model="formModel.shippingName"
            placeholder="请输入商品名称"
          ></el-input>
        </div>
        <div class="form_flex">
          <el-button
            type="primary"
            >查询</el-button
          >
          <el-button type="primary">导出</el-button>
          <el-button>重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      formModel:{
        dataTime: '',
        refundState: '',
        shippingStatus: '',
        reason: '',
        type: '',
        shippingName: '',
      },
      options1:[{value:'1',label:'1'}],
      options2:[{value:'2',label:'2'}],
      options3:[{value:'3',label:'3'}],
      options4:[{value:'4',label:'4'}],
    }
  }
}
</script>

<style lang='scss' scoped>
.Refund{
  .form_box{
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    .form_top{
      display:flex;
      flex-wrap: wrap;
    }
    .form_flex{
      margin-right: 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      > span{
        display: inline-block;
        min-width: 80px;
        text-align: right;
      }
      .form_input{width: 50%;}
    }
  }
}
</style>