import Vue from "vue"
import VueRouter from "vue-router"

// 懒加载
const Home = () => import("../views/home/Home")
const DetailPage = () => import("../views/detail/DetailPage.vue")
const Category = () => import("../views/category/Category")
const Appreciates = () => import("../views/appreciates/Appreciates")
const Partner = () => import("../views/partner/Partner")
const Message = () => import("../views/message/Message")
const About = () => import("../views/about/About")


Vue.use(VueRouter)

const routes = [
    {path: '', redirect: "/home"},
    {path: '/home', component: Home},               //首页
    {path: '/detailPage', component: DetailPage,},  //文章详情页
    {path: '/category', component: Category},       //分类
    {path: '/appreciates', component: Appreciates}, //赞赏
    {path: '/partner', component: Partner},         //伙伴
    {path: '/message', component: Message},         //留言板
    {path: '/about', component: About},             //关于
];

const router = new VueRouter({
    routes,
    mode: 'history', //去除地址栏的 # 符号
})

export default router;