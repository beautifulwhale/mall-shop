import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('../pages/Home/Home.vue')
const Category = () => import('../pages/Category/Category.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Detail = () => import('../pages/Detail/Detail.vue')
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    }, {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})
