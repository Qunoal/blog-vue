import Vue from "vue"
import VueRouter from "vue-router"

// 懒加载
const Home = () => import("../views/home/Home")
const About = () => import("../views/about/About")

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: "/home",
    },
    {
        path: '/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    }
];

const router = new VueRouter({
    routes,
    mode: 'history', //去除地址栏的 # 符号
})


export default router;