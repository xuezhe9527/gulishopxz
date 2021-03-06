import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const service = axios.create({
  baseURL: '/api',
  timeout: 20000,
})

//请求拦截器
service.interceptors.request.use(config => {
  NProgress.start()
  //每次请求都要带上userTempid
  let userTempId = store.state.user.userTempId
  // console.log(userTempId);
  if(userTempId){
    config.headers.userTempId = userTempId
  }

  //让每次请求都带上token
  let token = store.state.user.userInfo.token
  if(token){
    config.headers.token = token
  }
  return config
})


//响应拦截器
service.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error => {
    NProgress.done()
    alert('请求出错：' + error.message || '未知错误')
    return new Promise(() => { })   //返回中断的promise，不允许用户继续处理
    // return Promise.reject(error) //允许用户继续处理错误
  }
)

export default service