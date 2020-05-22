<!-- 头部公用 导航栏+大图+头像信息栏 -->
<template>
    <div id="header">

        <!--导航栏-->
        <div class="nav-bar">
            <el-menu mode="horizontal" :router="true">
                <el-menu-item index="/home">首页</el-menu-item>
                <el-submenu index="12">
                    <template slot="title">分类</template>


                    <el-menu-item
                            :index="'/category?category='+item"
                            v-for="item in category" @click="sendRequest">

                        {{item}}
                    </el-menu-item>


                    <!--                    <el-menu-item index="/category?category=HTML">创作集</el-menu-item>-->
                    <!--                    <el-menu-item index="/category?category=JavaScript">事件簿</el-menu-item>-->
                    <!--                    <el-menu-item index="/category?category=JavaScript111">{{category}}</el-menu-item>-->


                </el-submenu> <!--分类-->
                <el-submenu index="2">
                    <template slot="title">工作台</template>
                    <el-menu-item index="2-11" :route="this.$route.path"><a href="http://www.baidu.com" target="_blank">其它项目1</a>
                    </el-menu-item>
                    <el-menu-item index="2-22" :route="this.$route.path"><a href="http://www.baidu.com" target="_blank">其它项目2</a>
                    </el-menu-item>
                    <el-menu-item index="2-33" :route="this.$route.path"><a href="http://www.baidu.com" target="_blank">其它项目3</a>
                    </el-menu-item>
                </el-submenu>  <!--工作室-->
                <el-menu-item index="/appreciates">赞赏</el-menu-item>
                <el-menu-item index="/partner">合作伙伴</el-menu-item>
                <el-menu-item index="/message">留言板</el-menu-item>
                <el-menu-item index="/about">关于</el-menu-item>


                <!--                <div style="float: right">-->
                <!--                    <el-menu-item index="/login">登录</el-menu-item>-->
                <!--                    <el-menu-item index="/register">注册</el-menu-item>-->
                <!--                </div>-->
                <!--                -->
            </el-menu>
        </div>
        <!-- 首页大图片 -->
        <div class="head-img">
            <!--头像信息栏-->
            <div class="Avatar-bar">
                <!--                <img src="~@/assets/img/header/Avatar.png" @click="toAbout">-->
                <img src="~@/assets/img/header/ss.jpg" @click="toAbout">
                <h2>
                    <a href="javascript:void(0)" @click="toAbout">
                        Write Code. Love Life.
                    </a>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 网络请求
     */
    import {getCategory, findCategory} from '../../network/ArticleCategory';

    export default {
        name: 'Header',
        data() {
            return {
                category: null,
            }
        },
        created() {
            getCategory().then(res => {
                this.category = res.data;
            })
        },
        methods: {
            // 去首页
            toAbout() {
                this.$router.replace('/about')
            },

            sendRequest() {
                //事件总线发射事件
                this.$bus.$emit("newCategory")
            }
        }
    }
</script>

<style>
    #header {
        position: relative;
    }

    /*——————————————————————————————————————————————————顶部导航栏——————————————————————————————————————————————————*/
    .nav-bar {
        position: fixed;
        top: 0px;
        left: 0;
        z-index: 990;
        width: 80%;
        height: 40px;
        line-height: 40px;
        color: #e7edef;
        background-color: rgba(20, 10, 20, 0.5);

        text-align: center;
        padding: 0px 10% 0px 10%;
    }

    /* 整个导航栏的高度*/
    .nav-bar > .el-menu.el-menu--horizontal {
        height: 40px;
        background: rgba(0, 0, 0, .0);
        border-bottom: transparent;
        color: #efefef;
    }

    /* 里面的每一个 选项 */
    .nav-bar .el-menu > .el-menu-item {
        height: 40px;
        line-height: 40px;
        color: #dddd;
    }

    /* 活跃的时候  显示的样式 */
    .nav-bar > .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: 2px solid #409EFF;
        color: white;
        background: rgba(0, 0, 1, 0);
    }

    /* 工作台 移动上去列出一个列表 */
    .nav-bar > .el-menu--horizontal > .el-submenu .el-submenu__title {
        line-height: 40px;
        height: 40px;
        color: #dddd;
    }

    /*点击多选框项，鼠标离开，文字的颜色*/
    .nav-bar > .el-menu--horizontal > .el-submenu:focus .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
        /*color:red;*/
        color: #dddd;
    }

    .nav-bar > .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
        border-bottom: 2px solid #409EFF;
        color: white;
    }

    .el-menu--horizontal .el-menu .el-menu-item .el-menu--horizontal .el-menu .el-submenu__title {
        background: red;
    }

    /*——————————————————————————————————————————————————首页大图——————————————————————————————————————————————————*/
    .head-img {
        height: 850px;
        /*图片样式*/
        background-image: url(../../assets/img/header/home-02.jpg);
        background-repeat: no-repeat;
        margin-bottom: 90px;

        background-size: cover;

    }

    /* 透明+头像 栏 */
    .Avatar-bar {
        width: 70%;
        height: 20%;
        background: rgba(230, 244, 249, 0.7);
        border-radius: 8px 8px 0px 0px;
        padding: 40px 0px;

        text-align: center;

        position: relative;
        top: 78%;
        margin: 0px auto;

        z-index: 2;
    }

    /*头像为圆，动画效果*/
    .Avatar-bar img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: 0.5s;
    }

    /* 鼠标移动如图片，转一圈*/
    .Avatar-bar img:hover {
        /*旋转 只能给定角度*/
        transform: rotate(360deg);
    }

    /*Write Code. Love Life. 文字样式*/
    .Avatar-bar h2 {
        margin-top: -2px;
    }

    /*文字颜色渐变*/
    .Avatar-bar h2 a {
        font-size: 18px;
        background: linear-gradient(to right, #923e2e, #48456D);
        -webkit-background-clip: text;
        color: transparent;
    }

    a {
        text-decoration: none;
    }
</style>
