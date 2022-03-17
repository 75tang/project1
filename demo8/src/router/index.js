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
