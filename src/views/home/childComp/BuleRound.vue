<!-- ---------------------------模板区--------------------------- -->
<template>
    <!--左上角的蓝色圆圈，里面放的是日期-->
    <div id='BuleRound'>
        <div class="d1">{{month_str}}月</div>
        <span>{{day_str}}</span>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "BuleRound",
        props: {
            dateTime: {
                type: String
            }
        },
        computed: {

            //2020-5-15 12:00:00
            month_str() {
                if (this.dateTime != null) {
                    let s = this.dateTime.split(" ")[0]; //2020-5-15
                    return s.split("-")[1]; //5
                }else {
                    return "N"
                }
            },
            day_str() {
                if (this.dateTime != null) {
                    let s = this.dateTime.split(" ")[0]; //2020-5-
                    return s.split("-")[2]; //15
                }else {
                    return "N"
                }
            }
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #BuleRound {
        width: 70px;
        height: 60px;

        padding-top: 10px;
        background: #97dffd;
        border-radius: 50%;
        color: #fff;
    }

    .d1 {
        font-size: 16px;
    }

    span {
        font-size: 30px;
        font-weight: 700;
        position: relative;
        top: -5px;
    }
</style>