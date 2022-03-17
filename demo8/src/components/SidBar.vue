<template>
  <div>
    
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      >
      <el-submenu index="1">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="onHome">
             商品列表
          </el-menu-item>
          <el-menu-item index="1-2" @click="onCategory">分类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>交易管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="onOrder">
             订单管理
          </el-menu-item>
          <el-menu-item index="1-2" @click="onRefund">
            退款详情
          </el-menu-item>
          <el-menu-item index="1-1" @click="onEvaluate">
             评价详情
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>店铺管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="onShop">
             店铺首页
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1" @click="onAccount">
             财务总览
          </el-menu-item>
          <el-menu-item index="4-2" @click="onRecord">结算记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1" @click="onRole">
             角色管理
          </el-menu-item>
          <el-menu-item index="5-2" @click="onLimit">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1" @click="onShopping">
             店铺信息
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {

    methods:{
      onHome(){
        this.$router.push({path:'/home'})
      },
      onCategory(){
        this.$router.push( {path:'/category'})
      },
      onOrder(){
        this.$router.push( {path:'/order'})
      },
      onRefund(){
        this.$router.push( {path:'/refund'})
      },
      onEvaluate(){
        this.$router.push( {path:'/evaluate'})
      },
      onShop(){
        this.$router.push({path:'/shopHome'})
      },
      onAccount(){
        this.$router.push(
          {path:'/accountAdmin'})
      },
      onRecord(){
        this.$router.push( {path:'/record'})
      },
    }
}
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo{
    width: 200px;
    height: 100vh;

}    .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
}


</style>