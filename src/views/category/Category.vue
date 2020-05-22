<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id='Category'>
        <el-row :gutter="30">
            <!--左侧视图-->
            <el-col :md="16">
                <!--分类-->
                <category-info/>

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
    import CategoryInfo from "./childComp/CategoryInfo";
    import Right from "../../components/this-porject/Right";

    export default {
        name: "Category",
        components: {
            Right,
            CategoryInfo
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #Category {
        max-width: 80%;
        margin: 0 auto;
    }
</style>