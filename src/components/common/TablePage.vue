<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id="table-page-box">
        <h2>
            &nbsp;
            {{message}}
        </h2>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "TablePage",
        props:{
            message:{
                type:String,
                default:"null"
            }
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #table-page-box h2 {
        color: #fff4eb;
        font-size: 14px;
        background-color: #97dffd;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        display: inline-block;

        border-radius: 4px 4px 4px 0px;

        padding: 7px 35px 10px 35px;
        margin: 10px 0px 14px 0px;

        position: relative;
    }

    #table-page-box h2::after {
        content: " 11 ";
        position: absolute;
        top: 36px;
        left: 0;


        width: 0px;
        height: 0px;
        border-width: 14px 0px 14px 14px;
        border-color: transparent;
        border-style: solid;
        border-top-color: #48456D;

        z-index: 554;
    }


</style>