import Vue from 'vue'
import Antd from 'ant-design-vue';
import ElementUI from 'element-ui';
import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
