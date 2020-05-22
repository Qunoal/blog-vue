<!-- ---------------------------模板区--------------------------- -->
<template>
    <div id="footer">

        <!--        <div>占位</div>--> <!--可以放一些东西-->

        <div class="footer-box"> <!--4天12小时28分47秒-->
            <p>于2020-05-15 12:00发布 博客已运行<span>{{runTime}}</span> <span id="animation">(●'◡'●)ﾉ♥</span></p>
            <p>
                托管于 <a href="">GitHub</a> <a href="">阿里云</a>. 提供静态文件云存储服务.
                <a href="https://www.cloudxns.net/Order/index.html">百度统计</a>
                提供网站统计服务. <a href="https://www.cloudxns.net/Order/index.html">CloudXNS</a>
                提供 DNS 解析服务.</p>

            <p>© 2020 <a href="#">Blog</a> . 由 <a href="">Vue</a> 编写 . 京ICP备17071595号-1.</p>

            <p class="p4">
                <span>
                    Made with
                </span>

                <img src="~@/assets/img/right/heart02.png" alt="">

                <span>
                   by Ti.
                </span>
            </p>
        </div>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "Footer",
        data() {
            return {
                runTime: '',
            }
        },
        methods: {
            calculateTime() {
                // 上线时间
                let onlineTime = new Date('2020/05/15 12:00:00').getTime();

                setInterval(() => {
                    // 拿到当前时间毫秒值 - 减去上线时间毫秒值
                    let longTime = new Date().getTime() - onlineTime;

                    let day = parseInt(longTime / 1000 / 60 / 60 / 24 , 10); //天数
                    let hours = parseInt(longTime / 1000 / 60 / 60 % 24 , 10); //小时
                    let minutes = parseInt(longTime / 1000 / 60 % 60, 10);//计算剩余的分钟
                    let seconds = parseInt(longTime / 1000 % 60, 10);//计算剩余的秒数

                    this.runTime = day + "天" + hours + "小时" + minutes + "分" + seconds + "秒";

                }, 1000)

            }
        },
        created() {
            // 计算时间差
            this.calculateTime();
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    #footer {
        margin-top: 120px;
    }

    .footer-box {
        max-width: 100%;
        background: #232323;
        padding: 15px;
    }

    .footer-box p {
        text-align: center;
        color: #888;
        margin: 6px 0px;
        font-size: 12px;

        position: relative;
    }

    /*动画效果的颜表情*/
    #animation {
        animation: my-Animation .5s infinite ease-in-out;
        display: inline-block;
        margin: 0 5px;
    }

    @keyframes my-Animation {
        10% {
            transform: rotate(2deg); /*图片*/
        }
        20% {
            transform: rotate(-2deg); /*图片*/
        }
        30% {
            transform: rotate(2deg); /*图片*/
        }
        40% {
            transform: rotate(2deg); /*图片*/
        }
        50% {
            transform: rotate(2deg); /*图片*/
        }
        60% {
            transform: rotate(-2deg); /*图片*/
        }
        70% {
            transform: rotate(-2deg); /*图片*/
        }
        80% {
            transform: rotate(-2deg); /*图片*/
        }
        90% {
            transform: scale(1.2);
        }
        100% {
            transform: translate(0, 2px);
        }
    }

    .footer-box a {
        color: #795548;
    }

    .footer-box a:hover {
        color: white;
    }

    .footer-box .p4 span {

        margin: 0 15px;
    }

    .footer-box .p4 img {
        text-align: center;
        position: absolute;
        width: 20px;
        top: 0px;
        left: 50.32%;

        animation: my-heart 1s infinite ease-in-out;
    }

    @keyframes my-heart {
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }


</style>