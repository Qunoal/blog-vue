<!-- 头部公用 导航栏+大图+头像信息栏 -->
<template>
    <div id="header">
        <!--导航栏-->
        <div class="nav-bar">
            wefsdafsdfsdf ====sfdsd=af=sa=f=sdaf=dsfsf
        </div>

        <!-- 图片 -->
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
    export default {
        name: 'Header',
        methods: {
            toAbout() {
                this.$router.replace('/about')
            }
        }
    }
</script>

<style>
    /*顶部导航栏*/
    .nav-bar {
        position: fixed;
        top: 0px;
        left: 0;
        color: white;
        z-index: 990;

        width: 100%;
        height: 20px;

        display: block;

        background-color: black ;
    }

    /*首页大图*/
    .head-img {
        height: 650px;
        /*图片样式*/
        background-image: url(../../assets/img/header/homg-img.jpg);
        background-repeat: no-repeat;
        margin-bottom: 90px;

        background-size:cover;

    }

    /* 透明+头像 栏 */
    .Avatar-bar {
        width: 70%;
        height: 20%;
        background: rgba(230, 244, 249, 0.8);
        border-radius: 8px 8px 0px 0px;
        padding: 40px 0px;

        text-align: center;

        position: relative;
        top: 72%;
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
