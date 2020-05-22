<!-- ---------------------------模板区--------------------------- -->

<!---------------- 留言板--------------- -->
<template>
    <div id='Message'>
        <el-row :gutter="30">
            <!--左侧视图-->
            <el-col :md="16">
                <!-- 留言板信息 -->
                <message-info/>

                <!--评论信息-->
                <comment :commentsInfos="comments"/>


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
    import MessageInfo from "./childComp/MessageInfo";
    import Right from "@/components/this-porject/Right";
    import Comment from "@/components/this-porject/Comment";

    /**
     * 网络请求评论数据
     */
    import {findComment} from "../../network/Comment";

    export default {
        name: "Message",
        components: {
            Right,
            Comment,
            MessageInfo
        },
        data() {
            return {
                comments: []  //评论信息
            }
        },
        created() {
            let belong = this.$route.path.replace("/", '');

            // 查询该模块下的评论信息
            findComment(belong).then(res => {
                this.comments = res.data;
            }).catch(err => {
                console.log(err)
            });

        },
        mounted() {
            document.documentElement.scrollTop = 865;
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #Message {
        width: 80%;
        margin: 0 auto;
    }


</style>