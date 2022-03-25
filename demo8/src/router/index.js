import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Layout from '../views/Layout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
    redirect:'login',
    component:Layout,
    children:[
      {
        path:'/home',
        name:'Home',
        component:()=>import('@/views/GoodsAdmin/Home/Home.vue'),
        meta:{
          title:'商品列表'
        }
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('@/views/GoodsAdmin/Category/Category.vue'),
        meta: {
          title: '分类管理'
        }
      },
      {
        path:'/evaluate',
        name:'evaluate',
        component:()=>import('../views/TradeAdmin/evaluate/evaluate.vue'),
        meta:{
          title:'评价管理'
        }
      },
      {
        path:'/order',
        name:'order',
        component:()=>import('../views/TradeAdmin/order/OrderAdmin.vue'),
        meta:{
          title:'订单管理'
        }
      },
      {
        path:'/refund',
        name:'refund',
        component:()=>import('../views/TradeAdmin/RefundAdmin/RefundAdmin.vue'),
        meta:{
          title:'退款管理'
        }
      },
      {
        path:'/shopHome',
        name:'shopHome',
        component:()=>import('../views/ShopAdmin/ShopHome.vue'),
        meta:{
          title:'店铺首页'
        }
      },
      {
        path:'/accountAdmin',
        name:'accountAdmin',
        component:()=>import('../views/AccountAdmin/AccountAdmin.vue'),
        meta:{
          title:'财务总览'
        }
      },
      {
        path:'/record',
        name:'record',
        component:()=>import('../views/AccountAdmin/AccountRecord.vue'),
        meta:{
          title:'结算记录'
        }
      },
      {
        path:'/role',
        name:'role',
        component:()=>import('../views/UserAdmin/RoleAdmin/RoleAdmin.vue'),
        meta:{
          title:'角色管理'
        }
      },
      {
        path:'/limit',
        name:'limit',
        component:()=>import('../views/UserAdmin/LimitAdmin/LimitAdmin.vue'),
        meta:{
          title:'权限控制'
        }
      },
      {
        path:'/store',
        name:'store',
        component:()=>import('../views/System/StoreIn/StoreIn.vue'),
        meta:{
          title:'店铺信息'
        }
      },
/*       {
        path:'/form',
        name:'form',
        component:()=>import('../views/Components/Form.vue'),
        meta:{
          title:'表单基础'
        }
      }, */
      {
        path:'/select',
        name:'select',
        component:()=>import('../views/Components/Select.vue'),
        meta:{
          title:'选择器'
        }
      },
      {
        path:'/check',
        name:'check',
        component:()=>import('../views/Components/Check.vue'),
        meta:{
          title:'选择框'
        }
      },
      {
        path:'/tabs',
        name:'tabs',
        component:()=>import('../views/Components/Tabs.vue'),
        meta:{
          title:'标签页'
        }
      },
      {
        path:'/tree',
        name:'tree',
        component:()=>import('../views/Components/Tree.vue'),
        meta:{
          title:'树'
        }
      },
      {
        path: '/upload',
        name: 'upload',
        component: ()=>import('../views/Components/Upload.vue'),
        meta:{
          title:'上传'
        }
      },
      {
        path: '/alert',
        name: 'alert',
        component: ()=>import('../views/Components/Alert.vue'),
        meta:{
          title:'弹框'
        }
      },
    ]
  },  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'登录'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
