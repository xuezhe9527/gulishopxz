import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'

//方法的集合
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: "GET"
})

export const reqBannerList = () => mockAjax.get('/banner') //已经配置过baseUrl，
export const reqFloorList = () => mockAjax.get('/floor') //已经配置过baseUrl，

//简单测试
// console.log(11111)
// console.log(reqBanner());
// console.log(22222)