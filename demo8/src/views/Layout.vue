<template>
<!--   <div class="Layout">
      <SidBar/>
      <div class="layout_box">
          <RHeader/>
          <div class="content_box">
              <transition>
                  <router-view></router-view>
              </transition> 
          </div>
      </div>
  </div> -->
<el-container class="Layout">
  <el-aside width="200px"><SidBar/></el-aside>
  <el-container>
    <el-header class="layout_box"><RHeader/></el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import SidBar from '../components/SidBar';
import RHeader from '../components/RHeader';
export default {
    components:{
        SidBar,
        // SidBar:()=>('../components/SidBar.vue'),
        RHeader,
    }
}
</script>

<style lang='scss' scoped>
.Layout {
  /* display: flex; */
  background: #eee;
  .layout_box {
  /*   width: 100%; */
    /* overflow: hidden; */
/*     color: #eee; */
    .content_box {
      /* height: calc(100vh - 100px);//动态高度 */
      height:100vh;
      margin: 20px;
      padding: 20px;
      box-sizing: border-box;
      background:white;
    }
  }
  .el-header {
    padding: 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    background-color: white;
    margin: 20px;
}

  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-60px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(60px);
  }

  /* breadcrumb transition */
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all 0.5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
}

</style>