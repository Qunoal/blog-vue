<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id='PartnerInfo'>
        <div class="partner-box">
            <p> 阿巴~阿巴~阿巴</p>
            <img src="~@/assets/img/partner/maoto.png" alt="">
        </div>

    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "PartnerInfo"
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    .partner-box {
        background: white;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 30px;

        text-align: center;
    }

    .partner-box p {
        font-size: 30px;
        font-weight: 700;
    }
</style>