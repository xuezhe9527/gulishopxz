import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import  '@/mock/mockServer' //这样引入后，原有的方法中的console就可以执行，但是没有数据
import * as API from '@/api'
import SlideLoop from '@/components/SlideLoop'
import Pagination from '@/components/Pagination'
import {MessageBox,Message} from 'element-ui'


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

//一般可以在这里测试
// console.log(API)
// API.reqBannerList()
// API.reqFloorList()
// API.reqGoodsList({})

Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.component('Pagination',Pagination)
Vue.config.productionTip = false

new Vue({ 
  beforeCreate() {
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API
  },
  el:'#app',
  render: h => h(App),
  router,
  store
})
