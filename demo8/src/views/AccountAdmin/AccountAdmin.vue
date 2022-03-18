<template>
  <div class="accountAdmin">
    <div class="accountAdmin_header">
      <div class="header_box">
       <span>累计收入</span>
       <span>￥500.00</span>
      </div>
      <div class="header_box">
        <span>今日收入</span>
        <span>￥500.00</span>  
      </div>
      <div class="header_box">
        <span>七日收入</span>
        <span>$500.00</span>
      </div> 
    </div>
    <div class="header_button">
      <el-button type="info" size="large">账号明细</el-button>
    </div>
    <div class="accountAdmin_tabel">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="houseName"
        label="房间名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="payTime"
        label="支付时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderNumber"
        label="订单号">
      </el-table-column>
      <el-table-column
        prop="trade"
        label="交易流水号"
      >
      </el-table-column>
        <el-table-column
          property="userName"
          label="客户昵称">
        </el-table-column>      
        <el-table-column
          property="money"
          label="金额">
        </el-table-column>
        <el-table-column
          property="pay"
          label="支付方式">
        </el-table-column>
        <el-table-column
          property="State"
          label="状态">
        </el-table-column>
        <el-table-column
          property="do"
          label="操作">
          <el-button type="text">详情</el-button>
        </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[]
    }
  }
}
</script>

<style lang="scss">
.accountAdmin{
  .accountAdmin_header{
    display: flex;
    .header_box{
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(0, 0, 0, .4);
      width: 200px;
      height: 100px;
      span:nth-child(1) {
        margin-left: 10px;
        margin-top: 20px;
      }
      span:nth-child(2) {
        margin-left: 10px;
        font-size: 24px;
        font-weight: bold; 
        margin-top: 15px;
      }

    }

  }
  .header_button{
        margin-top: 100px;
        margin-left: 20px;
        .el-button{
          border-radius: 0px;
          width: 100px;
        }
  }
  .accountAdmin_tabel{
    margin-top: 20px;
  }
}

</style>