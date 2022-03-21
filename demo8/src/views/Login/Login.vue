<template>
  <div class="login">
      <p class="title">兰溪文旅后台管理系统</p>
      <div class="content">
          <div class="login-box">
              <p class="p1">用户登录</p>
              <el-form
              :model='ruleForm'
              ref="ruleForm"
              :rules='rules'
              class='rule_form'
              >
                <el-form-item prop='userName'>
                    <el-input prefix-icon="el-icon-user" clearable v-model="ruleForm.userName" placeholder='手机号'></el-input>
                </el-form-item>
                <el-form-item prop='passWord'>
                    <el-input prefix-icon="el-icon-view" clearable type="primary" v-model="ruleForm.passWord" placeholder='请输入密码' @keyup.enter.native='submitForm(ruleForm)'></el-input>
                </el-form-item>
                <el-form-item>
                     <el-button class="submit" type='primary' @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
              </el-form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            ruleForm:{
                userName:'',
                passWord:'',
            },
            rules:{
                userName:[{required:true,message:'用户名不能为空',trigger:blur},],
                passWord:[{required:true,message:'密码不能为空',trigger:blur},]
            }
        }
    },
    methods: {
      submitForm(formName){
          this.$refs[formName].validate((valid)=>{
              if(valid){
               this.$router.push({name:'Home'})
              }else{
                  console.log('error');
                  return false;
              }
          });
      } , 
    },
}
</script>

<style lang='scss' scoped>
.login{
    background-size: 100% 100%;
    /* width: 100%; */
/*     height: 100vh; */
    .title{
        margin-left: 50px;
   /*  margin:7vh 8vw 0; */
   
    font-size:3vw;
    font-weight:bold;
    color: #0de3ee;
    text-align:left;
    }
    .content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        .login-box{
            width: 35vw;
            height: 28vw;
            margin-top:10vh;
            display: flex;
            border: 1px solid rgba(0,0,200,0.3);
            flex-direction: column;
            align-items: center;
            p{
                text-align: center;
            }
            .p1{
                margin:2.2vw auto 2vw;
                font-size:2vw;
                font-weight:bold;
            }
            .rule_form{
                width: 28vw;
                height: 25vh;
                .submit{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
    
</style>