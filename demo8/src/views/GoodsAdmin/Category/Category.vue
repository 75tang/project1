<template>
  <div class="category">
    <div class="category_header"> 
      <el-form
      :inline='true'
      ref="categoryForm"
      :model="categoryForm"
      class="category_form"
      >
      <el-form-item>
        <el-input v-model="categoryForm.value1" placeholder='请输入分类名称'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      </el-form>
      <div class="category_form_right">
        <el-button type="primary">新建分类</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categoryForm:{
        value1:''
      }
    }
    
  }
}
</script>

<style lang="scss" scoped>
.category{
  .category_header{
    display:flex;
    justify-content: space-between;
  }
}
</style>