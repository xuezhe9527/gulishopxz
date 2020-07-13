import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default 
  [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHide:true
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHide:true
      }
    },
    {
      path:'/search/:keyword?',  //设置可传可不传params参数
      component:Search,
      name:"search",
      props:route=>({keyword:route.params.keyword,keyword1:route.query.keyword1})
    },
    {
      path:'/',
      redirect:'/home'
    },
    
  ]
