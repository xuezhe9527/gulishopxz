import { reqAddOrUpdateShopCart, reqShopCartList, reqUpdateIsChecked, reqDeleteCart } from '@/api'

const state = {
  shopCartList: []
}
const mutations = {
  RECEIVESHOPCARTLIST(state, arg) {
    state.shopCartList = arg
  }
}

const actions = {
  //添加或修改购物车
  async addorUpdateShopCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (result.code === 200) {
      return '添加购物车成功'
    } else {
      // return '添加购物车失败' 返回的还是成功的promise
      //返回的是失败的promise
      return Promise.reject(new Error('添加购物车失败'))
    }
  },
  //查詢购物车的列表
  async getShopCartList({ commit }) {
    const result = await reqShopCartList()
    if (result.code === 200) {
      commit('RECEIVESHOPCARTLIST', result.data)
    }
  },
  //修改单个商品的选中状态
  async updateIsChecked({ commit }, { skuId, isChecked }) {
    const result = await reqUpdateIsChecked(skuId, isChecked)
    if (result.code === 200) {
      return '选中状态修改成功'
    } else {
      return Promise.reject(new Error('选中状态修改失败'))
    }
  },
  // 修改所有商品的选中状态
  updateAllIsChecked({ commit, state, dispatch }, isChecked) {
    //定义一个promise的数组，用来保存每次请求返回的promise
    let promises = []
    state.shopCartList.forEach(item => {
      if (item.isChecked === isChecked) return
      let promise = dispatch('updateIsChecked', { skuId: item.skuId, isChecked: isChecked })
      promises.push(promise)
    });
    return Promise.all(promises)
  },
  //删除购物车单个商品
  async deleteShopCart({ commit }, skuId) {
    console.log("vuex");
    const result = await reqDeleteCart(skuId)
    if (result.code === 200) {
      return "删除单个购物车商品成功"
    } else {
      return Promise.reject(new Error('删除单个购物车商品失败'))
    }
  },
  deleteCheckedCart({commit,state,dispatch}){
    let promises = []
    state.shopCartList.forEach(item=>{
      if(!item.isChecked) return
      let promise = dispatch('deleteShopCart',item.skuId)
      promises.push(promise)
    })
    return Promise.all(promises)
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