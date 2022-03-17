<template>
  <div class="Layout">
      <SidBar/>
      <div>
          <RHeader/>
          <div>
              <transition>
                  <router-view></router-view>
              </transition> 
          </div>
      </div>
  </div>
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
  display: flex;
  background: #eee;
  .layou_box {
    width: 100%;
    overflow: hidden;
    .content_box {
      height: calc(100vh - 100px);
      overflow: auto;
      margin: 20px;
      padding: 20px;
      box-sizing: border-box;
      background: #fff;
    }
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