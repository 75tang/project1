
<template>
  <div class="ShopHome">
    <el-form
    :model="shopHome"
    ref="shopHome"
    label-width="100px"
    class="shopHome_form"
    >
      <el-form-item label="店铺名称:">
        <el-input v-model="shopHome.shopName" disabled>店铺名称</el-input>
      </el-form-item>
      <el-form-item  label="地址:">
        <el-input v-model="shopHome.shopAddress"></el-input>
      </el-form-item>
      <el-form-item label="联系电话:">
        <el-input v-model="shopHome.phone">
        </el-input>
      </el-form-item>
      <el-form-item label="店铺标签">
        <el-tag
        :key="tag"
        color="white"
        v-for="tag in dynamicTags"
        :disable-transitions="false">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>
      </el-form-item>
      <el-form-item label="店铺图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-camera"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shopHome:{
        shopName:'店铺名称',
        shopAddress:'',
        phone:'',
      },
      dynamicTags: ['标签一','标签二','标签三'],
      inputVisible: false,
      inputValue: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>

<style lang="scss">
.ShopHome{
  margin-top: 50px;
 .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    width: 300px;
}
}
</style>