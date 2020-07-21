import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'

//方法的集合
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: "GET"
})

export const reqBannerList = () => mockAjax.get('/banner') //已经配置过baseUrl，
export const reqFloorList = () => mockAjax.get('/floor') //已经配置过baseUrl，

//请求search的商品搜索列表数据
// post  /api/list   data   //data如果是空的对象代表没有搜索条件，会返回所有商品信息
export const reqGoodsList = (searchParams) => Ajax.post('/list', searchParams)

//请求商品详情数据
//  /api/item/{ skuId }   get
export const reqGoodsDetailInfo = (skuId) => Ajax.get(`/item/${skuId}`)

//请求添加购物车  /api/cart/addToCart/{ skuId }/{ skuNum }    post
export const reqAddOrUpdateShopCart = (skuId,skuNum) => Ajax.post(`/cart/addToCart/${ skuId }/${ skuNum }`)
//简单测试
// console.log(11111)
// console.log(reqBanner());
// console.log(222223348)