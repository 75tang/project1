<!-- <template>
  <div>
      <div class="role_header">
          <span class="role_title">角色名称</span>
      </div>
      <div>
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">商品管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem1" @change="handleCheckeditem1Change">
            <el-checkbox v-for="item1 in goods" :label="item1" :key="item1">{{item1}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">交易管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem1" @change="handleCheckeditem1Change">
            <el-checkbox v-for="item1 in trade" :label="item1" :key="item1">{{item1}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">财务管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem1" @change="handleCheckeditem1Change">
            <el-checkbox v-for="item1 in account" :label="item1" :key="item1">{{item1}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">账号管理</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem1" @change="handleCheckeditem1Change">
            <el-checkbox v-for="item1 in user" :label="item1" :key="item1">{{item1}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">系统设置</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkeditem1" @change="handleCheckeditem1Change">
            <el-checkbox v-for="item1 in system" :label="item1" :key="item1">{{item1}}</el-checkbox>
        </el-checkbox-group>
  </div>
  </div>
</template>

<script>
const options11 =['商品管理','分类管理']
const options12 =['订单管理','退款管理','评价管理']
const options13 =['财务管理']
const options14 =['账号管理','角色管理']
const options15 =['系统设置']
export default {
    data(){
        return {
        checkAll1: false,
        checkeditem1: [],
        goods: options11,
        trade:options12,
        account:options13,
        user:options14,
        system:options15,
        isIndeterminate1: false
      };
    },
     methods: {
      handleCheckAllChange1(val) {
        this.checkeditem1 = val ? goods : [];
        this.isIndeterminate1 = false;
      },
      handleCheckeditem1Change(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.item1.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.item1.length;
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
</style> -->

<template>
  <div>
      <div class="role_header">
          <span class="role_title">角色名称</span>
      </div>
    <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">商品管理</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedgoods" @change="handleCheckedgoodsChange">
        <el-checkbox v-for="item1 in goods" :label="item1" :key="item1">{{item1}}</el-checkbox>
    </el-checkbox-group>
    <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">交易管理</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedtrade" @change="handleCheckedtradeChange">
        <el-checkbox v-for="item2 in trade" :label="item2" :key="item2">{{item2}}</el-checkbox>
    </el-checkbox-group>
    <el-checkbox v-model="checkAll3" @change="handleCheckAllChange3">财务管理</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedaccount" @change="handleCheckedaccountChange">
        <el-checkbox v-for="item3 in account" :label="item3" :key="item3">{{item3}}</el-checkbox>
    </el-checkbox-group>
    <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllChange4">账号管理</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkeduser" @change="handleCheckeduserChange">
        <el-checkbox v-for="item4 in user" :label="item4" :key="item4">{{item4}}</el-checkbox>
    </el-checkbox-group>
    <el-checkbox v-model="checkAll5" @change="handleCheckAllChange5">系统设置</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedsystem" @change="handleCheckedsystemChange">
        <el-checkbox v-for="item5 in system" :label="item5" :key="item5">{{item5}}</el-checkbox>
    </el-checkbox-group>   
  </div>
</template>
<script>
  const options1 = ['商品管理', '分类管理'];
  const options2 = ['订单管理', '退款管理','评价管理'];
  const options3 = ['财务管理'];
  const options4 = ['账号管理','角色管理'];
  const options5 = ['系统设置'];
  export default {
    data() {
      return {
        checkAll1: false,
        checkAll2: false,
        checkAll3: false,
        checkAll4: false,
        checkAll5: false,
        checkedgoods: ['商品管理'],
        checkedtrade: ['订单管理','退款管理'],
        checkedaccount:[''],
        checkeduser:['账号管理'],  
        checkedsystem:[''],      
        goods: options1,
        trade: options2,
        account:options3,
        user:options4,
        system:options5,
        isIndeterminate1: true,
        isIndeterminate2: true,
        isIndeterminate4: true,
      };
    },
    methods: {
      handleCheckAllChange1(val) {
        this.checkedgoods = val ? options1 : [];
        this.isIndeterminate1 = false;
      },
      handleCheckAllChange2(val) {
        this.checkedtrade = val ? options2 : [];
        this.isIndeterminate2 = false;
      },
      handleCheckAllChange3(val) {
        this.checkedaccount = val ? options3 : [];
      },
      handleCheckAllChange4(val) {
        this.checkeduser = val ? options4 : [];
        this.isIndeterminate4 = false;
      },
      handleCheckAllChange5(val) {
        this.checkedsystem = val ? options5 : [];
      },
      handleCheckedgoodsChange(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.goods.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.goods.length;
      },
      handleCheckedtradeChange(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.trade.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.trade.length;
      },
      handleCheckedaccountChange(value) {
        let checkedCount = value.length;
        this.checkAll3 = checkedCount === this.account.length;
      },
      handleCheckeduserChange(value) {
        let checkedCount = value.length;
        this.checkAll4 = checkedCount === this.user.length;
        this.isIndeterminate4 = checkedCount > 0 && checkedCount < this.user.length;
      },
      handleCheckedsystemChange(value) {
        let checkedCount = value.length;
        this.checkAll5 = checkedCount === this.system.length;
      }
    }
  };
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