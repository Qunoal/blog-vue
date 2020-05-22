<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id='CategoryInfo'>
        <category-article :article-list="articleList"/>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    import Article from "../../home/childComp/Article";
    import {findCategory} from "../../../network/ArticleCategory"

    export default {
        name: "Info",
        data() {
            return {
                articleList: [],
            }
        },
        components: {
            "category-article": Article,
        },
        created() {
            /**
             * 发送网络请求
             */
            findCategory(this.$route.query.category).then(res => {
                this.articleList = res.data;
            });

            // 监听顶部导航栏的分类点击，点击一次重新发送请求获取最新的数据
            this.$bus.$on("newCategory", () => {
                findCategory(this.$route.query.category).then(res => {
                    this.articleList = res.data;
                });

                document.documentElement.scrollTop = 865;
            })
        },
        mounted() {
            document.documentElement.scrollTop = 865;
        }

    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    .category-info-box {
        background: white;
        border-radius: 5px;

        margin-bottom: 30px;
        padding: 15px;

    }
</style>