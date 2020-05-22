<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id='Article'>
        <div class="article-box" v-for="item in articleList">
            <header>
                <!--左上角的里面放的是日期（蓝色圆）-->
                <bule-round :dateTime="item.releaseTime" class="leftTopRound"/>
                <!--标题-->
                <h3>{{item.title}}</h3>
                <!--文章点赞发布的一些信息-->
                <h2>
                    <i calss="fa fa-fw fa-user"> 发表于 </i>
                    <i class="fa fa-fw fa-clock-o"> {{item.releaseTime.split(" ")[0] }}  <!--2018年09月25日 •--> </i>
                    <i class="fa fa-fw fa-eye"> {{item.readNumber}}次围观 • </i>
                    <i class="fa fa-fw fa-comments"> 活捉 {{item.commentList.length}}条 • </i>
                </h2>
                <!--分类:标签页（蓝色）-->
                <table-page :message="item.category" class="table-page"></table-page>
            </header>

            <div class="body-content">
                <p>{{item.introduce == null?'':item.introduce}}</p>
                <p class="img-p">
                    <img :src="'https:'+item.introduceImg" v-if="item.introduceImg!=null">
                </p>
                <div>
                    <a :href="'/detailPage?aid='+item.id" target="_blank">阅读全文>></a>
                </div>
            </div>
        </div>
        <div class="loadingMore" @click="loadingMore" v-if="articleList.length >= 10">点击加载更多</div>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    import BuleRound from "./BuleRound";

    import TablePage from "@/components/common/TablePage";
    import {findArticleList} from "../../../network/Home";

    export default {
        name: "Article",
        components: {
            TablePage,
            BuleRound
        },
        props: {
            articleList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentPage: 1, //默认为第一页
                isToBottom: false,//判断数据是否到底了，没数据了
            }
        },
        methods: {
            // /*点击加载更多按钮*/
            loadingMore() {
                // 判断是否到底了
                if (!this.isToBottom) {
                    // page加1
                    this.currentPage++;

                    // 获取前10页文章
                    findArticleList(this.currentPage).then(res => {
                        let articleList = res.data;
                        if (articleList.length <= 0) {
                            this.$message.error("已经到底了")
                            this.isToBottom = true;
                        } else {
                            for (const objectItem of articleList) {
                                this.articleList.push(objectItem);
                            }
                        }
                    })
                } else {
                    this.$message.error("已经到底了")
                }

            },
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    /*整个盒子：白色背景 这个盒子*/
    .article-box {
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
    .article-box h3 {
        margin: 10px 0px;
    }

    /*****发布,点赞,收藏 文字行*******/
    .article-box h2 {
        font-size: 10px;
        margin: 10px 0px;
    }

    /* 去掉一些 i标签的默认样式 */
    .article-box h2 i {
        display: inline;
        font-style: normal;
        font-weight: normal;
        /*font-weight:bold;   */
    }

    .article-box header {
        text-align: center;
        height: 140px;
    }

    /****蓝色标签分类****/
    .table-page {
        position: absolute;
        left: -14px;
        top: 100px;
    }

    /********************************************内容区**********************************************/
    /*文字区*/
    .body-content p:first-of-type {
        text-indent: 2em;
        margin: 10px 0px 15px 0px;
    }

    /*图片区*/
    .img-p {
        max-height: 300px;
        overflow: hidden;
        text-align: center;
        margin: 10px 0px;
    }

    /*图片大小*/
    .img-p > img {
        max-width: 100%;
    }

    .body-content > div {
        text-align: center;
        margin: 10px 0px;
        line-height: 26px;
    }

    .body-content > div > a {
        padding: 2px 8px;
        background: #97dffd;
        color: white;
        font-size: 14px;
        border-radius: 5px;
        display: inline-block;
        transition: 0.4s;
    }

    /*鼠标进入效果：变色*/
    .body-content > div > a:hover {
        transform: scale(1.05);
        background: #48456D;
    }

    /***********************************************加载更多按钮***********************************************/
    .loadingMore {
        background: #97dffd;
        text-align: center;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;

        margin-bottom: 30px;
        padding: 5px;

        color: white;

        transition: 0.4s;
    }

    .loadingMore:hover {
        background: #48456D;
    }


</style>