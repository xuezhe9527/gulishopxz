import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import  '@/mock/mockServer' //这样引入后，原有的方法中的console就可以执行，但是没有数据
import * as API from '@/api'
import SlideLoop from '@/components/SlideLoop'
import loading from '@/assets/images/loading.gif'
import VueLazyLoad from 'vue-lazyload'
import '@/validate'
// import Pagination from '@/components/Pagination'  暂时先关闭我们自己的分页器
import {MessageBox,Message,Pagination} from 'element-ui'
Vue.use(Pagination) //使用elementui的分页插件

Vue.use(VueLazyLoad,{loading})


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
