//路由懒加载方式（优点：1单独打包，2.动态加载（需要时再加载））
const Home = () =>import('@/pages/Home')  //结果是一个函数
//webpack默认导入方式，整体打包
// import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

import store from '@/store'
export default 
  [
    {
      path:'/center',
      component:Center,
      children:[
        {
          path:'myorder',
          component:MyOrder,
        },
        {
          path:'grouporder',
          component:GroupOrder,
        },
        {
          path:'',
          redirect:'myorder',
        },
      ]
    },
    {
      path:'/pay',
      component:Pay
    },
    {
      path:'/paysuccess',
      component:PaySuccess
    },
    {
      path:'/trade',
      component:Trade
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/addcartsuccess',
      component:AddCartSuccess
    },
    {
      path:'/detail/:goodsId',
      component:Detail
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHide:true
      },
      //未登录的才可以看到登录页面，已经登陆的不可以看到，所以加一个路由独享守卫 //也可以在组件内部使用组件内守卫(但不能this，因为还没有创建出来，可以用vm代替)
      // beforeEnter: (to, from, next) => {
      //   if(!store.state.user.userInfo.name){
      //     next()
      //   }else{
      //     next('/')
      //   }
      // }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHide:true
      }
    },
    {
      path:'/search/:keyword?',  //设置可传可不传params参数
      component:Search,
      name:"search",
      // props:route=>({keyword:route.params.keyword,keyword1:route.query.keyword1})//测试用
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/communication',
      component: () => import('@/pages/Communication/Communication'),
      children: [
        {
          path: 'event',
          component: () => import('@/pages/Communication/EventTest/EventTest'),
          meta: {
            isHideFooter: true
          },
        },
        {
          path: 'model',
          component: () => import('@/pages/Communication/ModelTest/ModelTest'),
          meta: {
            isHideFooter: true
          },
        },
        {
          path: 'sync',
          component: () => import('@/pages/Communication/SyncTest/SyncTest'),
          meta: {
            isHideFooter: true
          },
        },
        {
          path: 'attrs-listeners',
          component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
          meta: {
            isHideFooter: true
          },
        },
        {
          path: 'children-parent',
          component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
          meta: {
            isHideFooter: true
          },
        },
        {
          path: 'scope-slot',
          component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
          meta: {
            isHideFooter: true
          },
        }
      ],
    },
    
  ]
