<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id="home">
        <el-row :gutter="30">
            <!--左侧视图-->
            <el-col :md="16">

                <home-article :articleList="articleList" />
            </el-col>

            <!--右侧视图 通用-->
            <el-col :md="8">
                <right/>
            </el-col>
        </el-row>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    /*左侧组件*/
    import Article from "./childComp/Article";
    /*右侧通用视图*/
    import Right from "@/components/this-porject/Right";

    /* 网络请求相关 */
    import {findArticleList} from "../../network/Home.js"

    export default {
        name: "Home",
        components: {
            Right,
            "home-article": Article, //标签冲突
        },
        data() {
            return {
                articleList: [], //文章数据列表
                currentPage: 1,// 当前页数
            }
        },
        created() {
            /**
             * 网络请求的方法
             */
            // 获取前10页文章，默认第一页
            findArticleList(1).then(res => {
                this.articleList = res.data;
            })

        },
        mounted() {
            document.documentElement.scrollTop = 0;
        },
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #home {
        width: 80%;
        margin: 0px auto;
    }

</style>