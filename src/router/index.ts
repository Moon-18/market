import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory } from 'vue-router'

const Home=()=>import('../views/home/home.vue')
const Category=()=>import('../views/category/category.vue')
const Cart=()=>import('../views/cart/cart.vue')
const Profile=()=>import('../views/profile/profile.vue')

//1.安装插件
//2.创建路由对象
const routes: Array<RouteRecordRaw> = [
 {
path:'',
redirect:'/home'
 },{
   path:'/home',
   component:Home
 },{
  path:'/category',
  component:Category
},{
  path:'/profile',
  component:Profile
},{
  path:'/cart',
  component:Cart
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//3.导出插件
export default router
