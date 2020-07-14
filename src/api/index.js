import Ajax from '@/ajax/Ajax'

//方法的集合
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: "GET"
})