<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id="about">

        <div class="container">
            <el-row :gutter="30">
                <!--左侧视图-->
                <el-col :md="16">
                    <!--关于我-->
                    <info/>
                    <!--评论-->
                    <comment/>
                </el-col>

                <!--右侧视图-->
                <el-col :md="8">
                    <right/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<!-- ---------------------------脚本区--------------------------- -->
<script>
    import Right from "@/components/this-porject/Right";
    import Info from "./childComp/Info";
    import Comment from "@/components/this-porject/Comment";

    export default {
        name: "About",
        components: {
            Right,
            Info,
            Comment
        },
        mounted() {
           document.documentElement.scrollTop = 700;
        }

    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    .container {
        width: 80%;
        margin: 0px auto;
    }
</style>