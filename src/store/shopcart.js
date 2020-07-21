import {reqAddOrUpdateShopCart} from '@/api'

const state = {
}
const mutations = {
}

const actions = {
  async addorUpdateShopCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdateShopCart(skuId,skuNum)
    if(result.code === 200){
      return '添加购物车成功'
    }else{
      // return '添加购物车失败' 返回的还是成功的promise
      //返回的是失败的promise
      return Promise.reject(new Error('添加购物车失败'))
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