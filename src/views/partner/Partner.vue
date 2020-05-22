<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id='Partner'>
        <el-row :gutter="30">
            <!--左侧视图-->
            <el-col :md="16">
                <!--合作伙伴信息-->
                <partner-info/>

                <!--评论信息-->
                <comment :comments-infos="comments"/>
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
    import PartnerInfo from "./childComp/PartnerInfo";
    import Right from "../../components/this-porject/Right";
    import Comment from "../../components/this-porject/Comment";
    import {findComment} from "../../network/Comment";

    export default {
        name: "Partner",
        components: {
            Right,
            Comment,
            PartnerInfo
        },
        data() {
            return {
                comments: []
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
    #Partner {
        width: 80%;
        margin: 0 auto;
    }


</style>