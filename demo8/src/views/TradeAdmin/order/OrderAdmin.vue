<template>
  <div class="order">
    <div class="order_form">
      <div class="order_left">
        <el-form
        class="order-form"
        ref="orderForm"
        :model="orderForm"
        label-width="150px"
        >
        <el-form-item label="支付类型:">
          <el-select v-model="orderForm.pay" placeholder="请选择">
            <el-option label="微信" value="weixin"></el-option>
            <el-option label="支付宝" value="pay"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单状态:">
          <el-select v-model="orderForm.state" placeholder="请选择">
            <el-option label="已支付" value="yes"></el-option>
            <el-option label="未支付" value="no"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单日期:">
          <el-date-picker
          v-model="orderForm.date1"
          ></el-date-picker>至
          <el-date-picker
          v-model="orderForm.date2"
          ></el-date-picker>
        </el-form-item>
        </el-form>
      </div>
      <div class="order_right">
        <el-form
        :model="rightForm"
        ref="rightForm"
        label-width="100px"
        >
          <el-form-item label="商品名称：">
            <el-input class="demo_input" v-model="rightForm.goodsName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="订单编号：">
            <el-input class="demo_input" v-model="rightForm.orderName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="店铺名称：">
            <el-input class="demo_input" v-model="rightForm.shopName" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="demo_button">
      <el-button type="primary">查询</el-button>
      <el-button style="margin-left:20px">重置</el-button>
    </div>
    <div class="demo_tabel">
      <el-table
        ref="singleTable"
        border
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          property="order"
          label="订单编号"
          width="120">
        </el-table-column>
        <el-table-column
          property="goodsName"
          label="商品名称"
          width="120">
        </el-table-column>
        <el-table-column
          property="shopName"
          label="店铺名称">
        </el-table-column>
        <el-table-column
          property="price"
          label="单价">
        </el-table-column>
        <el-table-column
          property="number"
          label="数量">
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
          property="userName"
          label="买家昵称">
        </el-table-column>
        <el-table-column
          property="orderState"
          label="订单状态">
        </el-table-column>
        <el-table-column
          property="do"
          label="操作">
          <el-button type="text">查看详情</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      orderForm:{
        pay:'',
        state:'',
        date1:'',
        date2:'',
      },
      rightForm:{
        goodsName:'',
        orderName:'',
        shopName:'',
      },
      tableData:[{
        order:'2021',
        goodsName:'',
        shopName:'',
        price:'',
        number:'',
        monney:'',
        pay:'',
        userName:'',
        orderState:'',
        do:'',
      }]
    }
    
  }
}
</script>

<style lang="scss" scoped>
.order_form{
  display:flex;
  justify-content: row;
  .demo_button{
    display: inline-block;
  }
}
.el-select {
    width: 300px;
    /* display: inline-block; */ 
 
}
.demo_input {
    /* position: relative; */
    /* font-size: 14px; */
    /* display: inline-block; */
    width: 300px;
};
.demo_tabel{
  margin-top: 20px;
}
</style>