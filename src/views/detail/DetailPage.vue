<!-- ---------------------------模板区--------------------------- -->
<!--—————————————————————————————————整个详情页面———————————————————————— -->
<template>
    <div id='DetailPage'>
        <el-row :gutter="30">
            <!--左侧视图-->
            <el-col :md="16">
                <!--文章的详细信息，底部的评论-->
                <div v-if="httpError">
                    <h1 style="text-align: center">访问错误！</h1>
                </div>

                <article-detail :articleInfo="articleInfo" v-else/>
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
    import Right from "@/components/this-porject/Right";

    import ArticleDetail from "./childComp/ArticleDetail";

    /**
     * 网络请求
     */
    import {detailInfo} from "../../network/Detail"

    export default {
        name: "DetailPage",
        components: {
            Right,
            ArticleDetail
        },
        data() {
            return {
                articleInfo: null,//{},  跟具id查询的文章所有信息，包括评论
                httpError: false,//请求错误，
            }
        },
        created() {
            // 拿到路径上的 id 去后台查询
            let aid = this.$route.query.aid
            //发送网络请求，拿到数据
            detailInfo(aid).then(res => {
                this.articleInfo = res.data;
            }).catch((err) => {
                this.httpError = true;
            });
        },
        mounted() {
            // 直接定位高度
            document.documentElement.scrollTop = 860;
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #DetailPage {
        max-width: 80%;
        margin: 0 auto;
    }
</style>