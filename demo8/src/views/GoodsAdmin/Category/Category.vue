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
    <div class="category_table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="分类名称"
          width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column
          prop="photo"
          label="分类图片"
          width="120">
        </el-table-column>
        <el-table-column
          prop="number"
          label="商品数"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          label="创建时间"
        >
        </el-table-column>
        <el-table-column
          prop="remove"
          label="移动"
        >
        </el-table-column>
        <el-table-column
          prop="do"
          label="操作"
        >
        <template>
          <el-button type="primary">
            编辑
          </el-button>
        </template>
        </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categoryForm:{
        value1:''
      },
      tabelData:[]
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