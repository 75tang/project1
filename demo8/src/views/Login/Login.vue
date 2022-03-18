<template>
  <div class="login">
      <p class="title">兰溪管理后台</p>
      <div class="content">
          <div class="login-box">
              <p class="p1">用户登录管理</p>
              <el-form
              :model='ruleForm'
              ref="ruleForm"
              :rules='rules'
              class='rule-form'
              >
                <el-form-item prop='userName'>
                    <el-input v-model="ruleForm.userName" placeholder='手机号'></el-input>
                </el-form-item>
                <el-form-item prop='passWord'>
                    <el-input type="primary" v-model="ruleForm.passWord" placeholder='请输入密码' @keyup.enter.native='submitForm(ruleForm)'></el-input>
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
    width: 100%;
    height: 100vh;
    .title{
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
            .rule-form{
                width: 300px;
                height: 100%;
                .submit{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
    
</style>