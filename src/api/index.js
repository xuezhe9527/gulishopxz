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
export const reqAddOrUpdateShopCart = (skuId, skuNum) => Ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

//请求购物车列表数据  /api/cart/cartList  get
export const reqShopCartList = () => Ajax.get('./cart/cartList')

//请求修改购物车选中状态 /api/cart/checkCart/{skuID}/{isChecked}  get
export const reqUpdateIsChecked = (skuID, isChecked) => Ajax.get(`/cart/checkCart/${skuID}/${isChecked}`)

//删除购物车单个商品 /api/cart/deleteCart/{skuId}
export const reqDeleteCart = (skuId) => Ajax.delete(`/cart/deleteCart/${skuId}`)

//注册用户 /api/user/passport/register   post
export const reqRegister = (userInfo) => Ajax.post('/user/passport/register', userInfo)

//用户登录 /api/user/passport/login post
export const reqLogin = (userInfo) => Ajax.post('/user/passport/login', userInfo)

//用户退出登录 /api/user/passport/logout  get
export const reqLoginOut = () => Ajax.get('/user/passport/logout')

//请求用户的交易信息 /api/order/auth/trade
export const reqTradeInfo = () => Ajax.get('/order/auth/trade')

//请求提交订单/请求创建订单 /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo,tradeInfo) => Ajax.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`,tradeInfo)

//请求/获取订单信息 /api/payment/weixin/createNative/{orderId}
export const reqOrderInfo = (orderId) => Ajax.get(`/payment/weixin/createNative/${orderId}`)

//查看订单的支付情况 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => Ajax.get(`/payment/weixin/queryPayStatus/${orderId}`)

//请求获取我的订单分页信息 /api/order/auth/{page}/{limit}    GET
export const reqMyOrder = (page,limit) =>Ajax.get(`/order/auth/${page}/${limit} `)
//简单测试
// console.log(11111)
// console.log(reqBanner());
// console.log(2222233489101112)