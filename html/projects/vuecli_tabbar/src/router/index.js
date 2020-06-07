import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Category = () => import('../views/category/Category.vue')

const routes = [
    {
        path: '',
        redirect: '/Home'
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
        path: '/profile',
        component: Profile
    },
    {
        path: '/shopcart',
        component: Shopcart
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
