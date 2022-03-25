<template>
  <div>
      <a-form-model-item label="上传">
            <a-upload
            name="file"
            :multiple="true"
            action="#"
            :headers="headers"
            @change="handleChange1"
            >
                <a-button><a-icon type="upload"></a-icon>Click to Upload</a-button>
            </a-upload>
            <a-upload
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="#"
            before-upload="beforeUpload"
            @change="handleChange2"
            >
                <img v-if="imageUrl" :src="imageUrl" alt="avatar"/>
                <div v-else>
                    <a-icon :type="loading?'loading':'plus'"></a-icon>
                    <div class="ant-upload-text">
                        Upload
                    </div>
                </div>
            </a-upload>
            <a-upload-dragger
            name="file"
            :multiple="true"
            action="#"
            @change="handleChange1"
            >
                <p class="ant-upload-drag-icon">
                    <a-icon type="inbox"></a-icon>
                </p>
                <p class="ant-upload-text">
                    Upload
                </p>
                <p class="ant-upload-hint">
                    Support
                </p>
            </a-upload-dragger>
        </a-form-model-item>
  </div>
</template>

<script>
function getBase64(img,callback){
    const reader =new FileReader();
    reader.addEventListener('load',()=>callback(reader.result));
    reader.readAsDataURL(img);
}
export default {
    data(){
        return{
            loading:false,
            imageUrl:'',
            headers:{
                authorization:'authorization-text'
            },
        }
    },
    methods:{
        handleChange1(info){
            if(info.file.status !=='uploading'){
                console.log(info.file,info.fileList);
            }
            if(info.file.status ==='done'){
                this.$message.success(`${info.file.name} file uploaded successfully`)
            }else if (info.file.status==='error'){
                this.$message.error(`${info.file.name} file upload failed`)
            }
        },
        handleChange2(info){
            if(info.file.status==='uploading'){
                this.loading=true;
                return;
            }
            if(info.file.status==='done'){
                getBase64(info.file.originFileObj,imageUrl=>{
                    this.imageUrl=imageUrl;
                    this.loading=false
                })
            }
        },
        beforeUpload(file){
            const isJpgOrPng=file.type==='image/jpeg'||file.type==='image/png'
            if(!isJpgOrPng){
                this.$message.error('JPG or PNG')
            }
            const isLt2M=file.size/1024/1024<2;
            if(!isLt2M){
                this.$message.error('must');
            }
            return isJpgOrPng&&isLt2M;
        }
    }

}
</script>

<style>

</style>