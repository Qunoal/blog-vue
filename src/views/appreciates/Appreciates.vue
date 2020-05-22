<!-- ---------------------------模板区--------------------------- -->
<!-- ---------- 赞赏 ---------- -->
<template>
    <div id='Appreciates'>

        <el-row :gutter="30">
            <!--左侧视图-->
            <el-col :md="16">
                <!--关于我-->
                <info/>

                <!--评论-->
                <comment :commentsInfos="comments"/>
            </el-col>

            <!--右侧视图-->
            <el-col :md="8">
                <right/>
            </el-col>
        </el-row>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    import Info from "./childComp/Info";
    import Comment from "../../components/this-porject/Comment";
    import Right from "../../components/this-porject/Right";

    /**
     * 网络请求
     */
    import {findComment} from "../../network/Comment"

    export default {
        name: "Appreciates",
        components: {
            Right,
            Info,
            Comment
        },
        data() {
            return {
                comments: []
            }
        },
        created() {
            let belong = this.$route.path.replace("/", '');

            findComment(belong).then(res => {
                this.comments = res.data;

            }).catch(err => {
                console.log(err)
            });
        },
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #Appreciates {
        width: 80%;
        margin: 0 auto;
    }
</style>