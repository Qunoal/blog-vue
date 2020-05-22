<!-- ---------------------------模板区--------------------------- -->
<template>
    <div>
        <div :class="isShow?'toTopImg':'toTopImg goTop'">
            <img src="~@/assets/img/common/toTop.png" @click="cliToTop">
        </div>

        <!--占高-->
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "ToTop",
        data() {
            return {
                isShow: false, //图片是否显示
            }
        },
        methods: {
            cliToTop() {
                let timer = setInterval(() => {
                    let top = document.documentElement.scrollTop; //900
                    // let number = top / 3;                         //300
                    let final_location = top - 180  //number - 150;            //600

                    if (final_location <= 300) {
                        // final_location = final_location - 50
                    }
                    document.documentElement.scrollTop = final_location;

                    if (final_location <= 0) {
                        //到顶，直接清除定时器
                        clearInterval(timer);
                    }
                }, 20)
            }
        },
        mounted() {
            // 监听滚动
            window.onscroll = () => {
                let top = document.documentElement.scrollTop;

                // 打印当前的位置
                // console.log(top)

                if (top >= 500) {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            }
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>

    .toTopImg {
        position: fixed;
        top: -140px;
        right: 3%;
        transition: all 0.8s 0.3s ease-in-out;
        cursor: pointer; /*鼠标悬浮出现小手*/
    }

    .goTop {
        top: -950px;
    }
</style>