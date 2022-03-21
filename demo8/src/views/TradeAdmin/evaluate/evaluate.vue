<template>
  <div class="Refund">
    <div class="form_box">
      <div class="form_top">
        <div class="form_flex">
          <span>评价时间：</span>
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
          类型：
          <el-select
          placeholder="请选择类型"
          v-model="formModel.type"
          >
            <el-option
             v-for="item in options"
             :key="item.value"
             :value="item.value"
             :label="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="form_flex">
          <span>评论内容：</span>
          <el-input
            v-model="formModel.content"
            placeholder="请输入评论内容"
          ></el-input>
        </div>
        <div class="form_flex">
          <el-button
            type="primary"
            >查询</el-button
          >
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
        type: '',
        content: '',
      },
      options:[{value:'1',label:'1'}],
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
      justify-content: space-evenly;
    }
    .form_flex{
      margin-right: 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      width: 300px;
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