<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id='MessageInfo'>
        <div class="message-box">
            <h2>留言板</h2>
            <h5>走过路过不要错过！交流、咨询、吐槽、感叹都在这里，尽情畅谈！</h5>
            <p>
                <img src="~@/assets/img/message/timg.jpg" alt="出错了">
            </p>
        </div>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "MessageInfo"
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #MessageInfo {

    }

    .message-box {
        padding: 15px;
        background: white;
        margin-bottom: 30px;
    }

    .message-box h2 {
        text-align: center;
        margin: 10px 0px;
    }
    .message-box h5 {
        text-align: center;
        /*margin: 10px 0px;*/
    }
    .message-box p{
        text-align: center;
        margin: 5px 0px;
    }
</style>