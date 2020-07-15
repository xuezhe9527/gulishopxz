import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'

const state = {
  categoryList:[],
  bannerList:[],
  floorList:[]
}

const mutations = {
  RECEIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  },
  RECEIVEBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  RECEIVEFLOORLIST(state,floorList){
    state.floorList = floorList
  }
}

const actions = {
  async getCategoryList({commit}){
    const result  = await reqCategoryList()
    if(result.code ===200){
      commit('RECEIVECATEGORYLIST',result.data)
    }
    
  },
  async getBannerList({commit}){
    const result  = await reqBannerList()
    if(result.code ===200){
      commit('RECEIVEBANNERLIST',result.data)
    }
  },
  async getFloorList({commit}){
    const result =  await reqFloorList()
    if(result.code ===200){
      commit('RECEIVEFLOORLIST',result.data)
    }
  }

}

const getters = {
  // 用新的方式获取floorList
  floorList(state){
    return state.floorList
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}