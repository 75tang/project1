<template>
  <div class="store">
      <div class="store_content">
        <span>店铺简介</span>
        <div class="store_box"> 
            <el-input
            type="textarea"
            maxlength="200"
            show-word-limit
            :rows="5"
            placeholder="输入简介,200字以内"
            v-model="textarea"
            ></el-input>             
            <p>一致性 Consistency与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
            <el-button type="primary">保存</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            textarea:''
        }
    }
}
</script>

<style lang="scss" scoped>
.store_content{
    display: flex;
    margin-top: 50px;
    margin-left:50px;
}
.store_box{
    margin-left:20px
}
   .el-textarea {
    position: relative;
    display: inline-block;
    width: 300px;
    vertical-align: bottom;
    font-size: 14px;
    }
    p {
        display: block;
        width: 300px;
    }
</style>