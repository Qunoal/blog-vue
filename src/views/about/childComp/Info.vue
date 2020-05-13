<!-- ---------------------------模板区--------------------------- -->
<template>
    <div>
        <div id="info">
            <h2>关于我</h2>
            <p><img src="~@/assets/img/about/maoto.png" alt=""></p>
        </div>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "Info"
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #info {
        /*height: 400px;*/
        background-color: #fff;
        padding: 15px;
        text-align: center  ;

        margin-bottom: 20px;
        border-radius: 5px;
        font-size: 14px;
    }

    #info h2{
        margin: 5px 0px;
    }
    #info p {
        margin: 5px 0px;
    }

</style>