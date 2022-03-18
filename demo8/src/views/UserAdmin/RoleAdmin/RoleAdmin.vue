<template>
  <div >
      <el-form
      :model="inlineForm"
      ref="inlineForm"
      :inline="true"
      class="inline_form"
      >
          <el-form-item label="用户名：">
              <el-input v-model="inlineForm.userName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form>
              <el-form-item label="账号：">
                  <el-input v-model="inlineForm.account"></el-input>
              </el-form-item>
          </el-form>
      </el-form>
      <el-form
      :model="inlineForm"
      ref="inlineForm"
      :inline="true"
      class="inline_form"   
      >
          <el-form-item label="创建日期：">
              <el-date-picker v-model="inlineForm.date1" placeholder="开始时间"></el-date-picker>至
              <el-date-picker v-model="inlineForm.date2" placeholder="结束时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="角色状态：">
              <el-select placeholder="请选择" v-model="inlineForm.state">
                  <el-option
                  :data="item in options"
                  ></el-option>
              </el-select>
          </el-form-item>
      </el-form>
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
          property="roleName"
          label="角色名称"
          width="120">
        </el-table-column>
        <el-table-column
          property="company"
          label="集团"
          width="120">
        </el-table-column>
        <el-table-column
          property="createTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          property="roleState"
          label="角色状态">
        </el-table-column>
        <el-table-column
          property="creater"
          label="创建人">
        </el-table-column>
        <el-table-column
          property="do"
          label="操作">
          <el-button type="text">查看详情</el-button>
          <el-button type="text" disabled>禁用</el-button>
          <el-button type="text">编辑</el-button>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            inlineForm:{
                userName:'',
                account:'',
                date1:'',
                date2:'',
                state:'',
            },
            tableData:[
                {roleName:'管理员',company:'180000000',createTime:'2021-04-05',roleState:'启用',creater:'-',}
            ],
            options:[],
        }
    }
}
</script>

<style>
.inline_form{
    display: flex;
    justify-content: space-evenly;
}
</style>