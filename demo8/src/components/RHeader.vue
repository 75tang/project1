<template>
  <div class="header">
    <div class="header_left">
      <p>运营管理系统</p>
    </div>
    <div class="header_right">     
        <i class="el-icon-cloudy-and-sunny"></i>
        <p style="margin-left:20px">晴转多云 20℃~30℃</p>
        <i style="margin-left:20px" class="el-icon-bell"></i>
        <div class="upload_demo" style="margin-left:20px" >    
          <img src="../assets/logo.png" alt="" style="width:30px;height:30px">       
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            RO酱
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.header{
    background-color:white;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .header_left{
      margin-left: 20px;
      display: flex;
      align-items: center;
    }
    .header_right{ 
      margin-right: 300px;
      display: flex;
      align-items: center;
      .upload_demo{
        border: 1px solid white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
      }
    }
}
.el-menu {
    border-right: solid 50px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
}
</style>