<template>
  <div class="demo-home">
    <el-tabs
    v-model="activeName"
    
    >
    <el-tab-pane label='出售中的商品' name='1'></el-tab-pane>
    <el-tab-pane label='仓库中的商品' name='2'></el-tab-pane>
    </el-tabs>
    <OnSale/>
  </div>
</template>

<script>
import OnSale from './components/OnSale.vue'
export default {
  components:{
    OnSale,
  },
  data(){
    return{
      activeName:'1'
    }
  }
}
</script>

<style>
.demo-home{
  color: white;
}
.el-tabs__header {
    padding: 20px;
    position: relative;
    margin: 0 0 15px;
}
</style>