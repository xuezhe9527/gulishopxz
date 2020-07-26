import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from '@/router/routes'
import store from '@/store'

//终极解决多次触发push或者repalce，报错的问题
//NavigationDuplicated

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    // originPush.call目的是让VueRouter实例化对象去调用‘
    //如果不加，那就是window在调用
    return originPush.call(this,location).catch(() => {})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}

VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    // originPush.call目的是让VueRouter实例化对象去调用‘
    //如果不加，那就是window在调用了了呀
    return originReplace.call(this,location).catch(() => {})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}


const router =  new VueRouter({
  routes,
  //设置滚动行为的初始位置在左上角
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

//未登录竟然还可以直接跳转至我的订单页面
// 必须登录后才能访问的多个界面使用全局守卫（交易相关、支付相关、用户中心相关）
router.beforeEach((to, from, next) => {
  let targetPath = to.path
  if(targetPath.startsWith('/pay') || targetPath.startsWith('/trade') || targetPath.startsWith('/center')){
    //判断用户当前是否登录，是，则直接放行，不是，则记录此路径，登陆成功则直接跳转至对应界面
    if(store.state.user.userInfo.name){
      next()
    }else{
      next('/login?redirect='+targetPath)
    }
  }else{
    next()
  }
})
export default router