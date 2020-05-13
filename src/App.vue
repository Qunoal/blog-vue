<template>
    <div id="app">
        <!--头-->
        <page-header/>

        <!--展示视图-->
        <router-view/>

        <!-- 置顶,返回顶部按钮 -->
        <to-top/>

        <!--尾-->
        <page-footer/>
    </div>
</template>

<script>
    /**
     * 回到顶部，页眉，页脚
     */
    import ToTop from "./components/common/totop/ToTop";
    import Header from "./components/this-porject/Header";
    import Footer from "./components/this-porject/Footer";

    export default {
        name: 'App',
        components: {
            ToTop: ToTop,
            pageHeader: Header,
            pageFooter: Footer,
        },
    }
</script>

<style>
    @import "./assets/css/bass.css";
</style>
