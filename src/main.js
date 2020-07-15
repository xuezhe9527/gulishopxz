import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import  '@/mock/mockServer' //这样引入后，原有的方法中的console就可以执行，但是没有数据
import * as API from '@/api'
import SlideLoop from '@/components/SlideLoop'

//一般可以在这里测试
// console.log(API)
// API.reqBannerList()
// API.reqFloorList()

Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
