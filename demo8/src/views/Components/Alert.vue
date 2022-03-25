<template>
  <div class="tankuang">
      <div class="alert">
        <a-alert message="Warning text" banner closable></a-alert>
        <a-alert message="success" type="success">
            <p slot="description">
                Success <span style="color:green">success</span>
            </p>
        </a-alert>
        <a-alert message="info" type="info">
            <p slot="description">
                info <span style="color:blue">info</span>
            </p>
        </a-alert>
        <a-alert message="warning" type="warning" ></a-alert>
        <a-alert message="Error"  show-icon type="error">
            <p slot="description">
                Error
            </p>
        </a-alert>
        <br> 
      </div>
      <div class="message">
          <a-button type="primary" @click="info">
              message
          </a-button>
          <a-button @click="success">
              success
          </a-button>
          <a-button @click="error">
              error
          </a-button>
          <a-button @click="warning">
              warning
          </a-button>
      </div>
      <div class="message">
        <a-button style="primary" class="notification" @click="openNotification">
          Open the notification box
        </a-button>
        <a-button type="primary" @click="openNotification('topLeft')">
           <a-icon type="radius-upleft"></a-icon>
           topLeft
        </a-button>  
        <a-button type="primary" @click="openNotification('topRight')">
           <a-icon type="radius-upright"></a-icon>
           topRight
        </a-button> 
      </div>
      
  </div>
</template>

<script>
export default {
    methods:{
        info(){
            this.$message.info('This is a normal message',10);
        },
        success(){
            this.$message.success('success');
        },
        error(){
            this.$message.error('error');
        },
        warning(){
            this.$message.warning('warning');
        },
        openNotification(placement){
            this.$notification.open({
                message:'Notification Title ${placement}',
                description:'content',
                onClick:()=>{
                    console.log('Notification Clicked!')
                },
                style:{
                    width:'600px',       
                },
                placement
            });
        },
    }
}
</script>

<style>
.tankuang{
    margin-top:10px
}
.message{
    margin-bottom: 10px;
}
</style>