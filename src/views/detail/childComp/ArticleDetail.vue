<!-- ---------------------------模板区--------------------------- -->
<!-- —————————————————————————————— 获取整个文章信息，包括这个文章的所有评论 ——————————————————————————————-->
<template>
    <!-- 文章详情页 底部评论，-->

    <div id="articleDetail">
        <div class="detail">
            <!-- 头部信息-->
            <header>
                <!--左上角的里面放的是日期（蓝色圆）-->
                <bule-round :dateTime="articleInfo.releaseTime" class="leftTopRound"/>
                <!--标题-->
                <h1>{{articleInfo.title}}</h1>
                <!--文章点赞发布的一些信息-->
                <h2>
                    <i calss="fa fa-fw fa-user"> 发表于 </i>
                    <i class="fa fa-fw fa-clock-o"> {{articleInfo.releaseTime.split(" ")[0]}} </i>
                    <i class="fa fa-fw fa-eye"> {{articleInfo.readNumber}}次围观 • </i>
                    <i class="fa fa-fw fa-comments"> 活捉{{articleInfo.commentList.length}}条 • </i>
                </h2>
                <p style="font-size: 12px; color: red">以上数据由爬虫采集，样式可能有些问题,完整数据可访问源地址</p>
                <!--分类:标签页（蓝色）-->
                <table-page :message="articleInfo.category" class="table-page"></table-page>
            </header>

            <!-- 内容 -->
            <div class="detail-article-content">
                <span v-html="articleInfo.content"></span>
            </div>

            <div class="origin">文章源地址：<a :href="articleInfo.origin" target="_blank">{{articleInfo.origin}}</a></div>


            <p id="datasrc">以上数据由爬虫采集，样式可能有些问题,完整数据可访问源地址</p>
        </div>

        <!--评论信息-->
        <comment :commentsInfos="articleInfo.commentList"/> <!--从文章对象中拿出所有的评论，传过去的是个数组-->

    </div>

</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    import BuleRound from "../../home/childComp/BuleRound";
    import TablePage from "@/components/common/TablePage";
    import Comment from "@/components/this-porject/Comment";

    export default {
        name: "ArticleDetail",
        props: {
            articleInfo: { // 整个文章的信息
                type: Object,
                default() {
                    return {}
                }
            },
        },
        components: {
            BuleRound,
            TablePage,
            Comment
        },
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>

    /*整个盒子：白色背景 这个盒子*/
    .detail {
        /*width: 100%;*/

        border-radius: 8px;
        background: #fff;
        padding: 15px;
        margin-bottom: 40px;

        position: relative;
    }

    /************左上角的圆***********/
    .leftTopRound {
        position: absolute;
        top: -30px;
        left: -30px;
    }

    /**********文章标题************/
    .detail h1 {
        margin: 10px 0px;
    }

    /*****发布,点赞,收藏 文字行*******/
    .detail h2 {
        font-size: 10px;
        margin: 10px 0px;
    }

    /* 去掉一些 i标签的默认样式 */
    .detail h2 i {
        display: inline;
        font-style: normal;
        font-weight: normal;
        /*font-weight:bold;   */
    }

    .detail header {
        text-align: center;
        height: 140px;
    }

    /****蓝色标签分类****/
    .table-page {
        position: absolute;
        left: -14px;
        top: 122px;
    }

    .detail-article-content {
        white-space: normal;
        word-break: break-all;
        overflow: hidden;
        margin-top: 23px;
    }

    .origin {
        margin-top: 30px;
        list-style: none;
        color: red;
        font-size: 16px;
    }

    #datasrc {
        text-align: center;
        font-size: 14px;
        color: #474945;

        margin: 30px 0 10px;
    }

</style>