import { getUserTempId } from '@/utils/userabout'
import { reqRegister,reqLogin,reqLoginOut } from '@/api'

const state = {
  userTempId: getUserTempId(),
  userInfo:JSON.parse(localStorage.getItem("USERINFO_KEY"))||{}
}
const mutations = {
  RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },  
  RESETUSERINFO(state){
    state.userInfo = {}
  }
}

const actions = {
  //用户注册
  async userRegister({commit},userInfo){
      const result = await reqRegister(userInfo)
      if(result.code ===200){
        return "注册成功"
      }else{
        return Promise.reject(new Error("注册失败"))
      } 
  },
  //用户登录
  async userLogin({commit},userInfo){
    const result = await reqLogin(userInfo)
    if(result.code===200){
      commit('RECEIVEUSERINFO',result.data)
      localStorage.setItem("USERINFO_KEY",JSON.stringify(result
        .data))
      return "登陆成功"
    }else{
      return Promise.reject(new Error("登陆失败"))
    }
  },
  async userLoginOut({commit},state){
    const result = await reqLoginOut()
    if(result.code===200){
      //清空loc里面存储的值，并清空state里面的值
      localStorage.removeItem('USERINFO_KEY')
      commit('RESETUSERINFO')
    }
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}