<template>
  <div>
      <div class="role_header">
          <span class="role_title">角色名称</span>
      </div>
      <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">商品管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem" @change="handleCheckeditemChange">
            <el-checkbox v-for="item in goods" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">交易管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem" @change="handleCheckeditemChange">
            <el-checkbox v-for="item in trade" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">财务管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem" @change="handleCheckeditemChange">
            <el-checkbox v-for="item in account" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">账号管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem" @change="handleCheckeditemChange">
            <el-checkbox v-for="item in user" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">系统设置</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem" @change="handleCheckeditemChange">
            <el-checkbox v-for="item in system" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
  </div>
  </div>
</template>

<script>
const options1 =['商品管理','分类管理']
const options2 =['订单管理','退款管理','评价管理']
const options3 =['财务管理']
const options4 =['账号管理','角色管理']
const options5 =['系统设置']
export default {
    data(){
        return {
        checkAll: false,
        checkeditem: [],
        goods: options1,
        trade:options2,
        account:options3,
        user:options4,
        system:options5,
        isIndeterminate: false
      };
    },
     methods: {
      handleCheckAllChange(val) {
        this.checkeditem = val ? goods : [];
        this.isIndeterminate = false;
      },
      handleCheckeditemChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.item.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.item.length;
      }
    }
}
</script>

<style lang="scss">
.role_header{
    border-bottom: 1px solid;
    height: 40px;
    font-size: 24px;
    .role_title{
     margin-left: 20px;        
    }
}
.el-checkbox{
    margin-left: 50px;
    margin-top: 10px;
}
.el-checkbox-group {
    font-size: 0;
    margin-left: 30px;
}
</style>