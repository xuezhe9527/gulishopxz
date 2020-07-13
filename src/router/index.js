import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from '@/router/routes'

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
    //如果不加，那就是window在调用
    return originReplace.call(this,location).catch(() => {})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}
export default new VueRouter({
  routes
})