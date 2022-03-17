<template>
  <div class="onSale">
      <div class="form_flex">
          <el-form
          :inline='true'
          :model="inlineForm"
          class="demo-form-inline"
          >
          <el-form-item label='分类'>
            <el-select
            v-model="inlineForm.value1"
            placeholder='请选择'
            >
              <el-option
              v-for="item in options"
              :key="item.value"
              :value='item.value'
              :label='item.label'
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="inlineForm.value2" placeholder='请输入商品名称'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type='primary' @click="search">查询</el-button>
          </el-form-item>
          </el-form>
          <div class="form_right">
            <el-button>批量下架</el-button>
            <el-button>批量删除</el-button>
            <el-button type="primary">发布商品</el-button>
          </div>
      </div>
      <div>
        <el-table
        :loading='true'
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width:100%"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          label="商品"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          label="分类"
          width="120">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          show-overflow-tooltip>
        </el-table-column>
         <el-table-column
          label="库存"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          label="总销量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="time"
          label="发布时间"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作"
          show-overflow-tooltip>
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">删除</el-button>
          <el-button type="primary">上架</el-button>
        </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      options:[
        {value:'1-1',label:'选项1'},
        {value:'1-2',label:'选项2'},
        {value:'1-3',label:'选项3'},
      ],
      inlineForm:{
        value1:'',
        value2:'',
      },
      tableData:[]
    }
  },
  methods: {
    search(){
      console.log('search')
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  },
}
</script>

<style lang="scss" scoped>
.onSale{
  .form_flex{
    display:flex;
    justify-content: space-between;
  }
  .table_box{
    .goods_box{
      display: flex;
      
    }
  }
}

</style>