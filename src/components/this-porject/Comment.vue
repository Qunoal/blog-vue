<!-- ---------------------------模板区--------------------------- -->
<template>
    <div>
        <div id="comment">
            <h4>发表评论</h4>
            <!--表单采集数据-->
            <form>
                <!--文本输入框-->
                <el-input class="textInput"
                          type="textarea"
                          :rows="4"
                          placeholder="说点什么呢``"
                          v-model="textContent">
                </el-input>
            </form>

            <p class="sendBtn" @click="sendComment">{{sendMessage}}</p>

            <p class="comment-count">捕捉10条</p>

            <ul class="content-list">
                <li>
                    <div class="img-left">
                        <img src="~@/assets/img/common/Tourists-Logo.jpg" alt="">
                    </div>
                    <div class="img-right">
                        <p>游客</p>
                        <p class="release-date">时间</p>
                        <p>内sdfaaaaaaaaaaaaaaaaaaaaaaaadsfsssssdfsadf
                            sdfasdfsf
                            dsafsdafsd
                            dsafsdafsd
                            dsafsdafsd
                            dsafsdafsd
                            dsafsdafsd
                            sdafsdfsdfs
                            ffffffffsdfasfsdfsdfffffffff容</p>
                    </div>
                </li>

                <li>
                    <div class="img-left">
                        <img src="~@/assets/img/common/Tourists-Logo.jpg" alt="">
                    </div>
                    <div class="img-right">
                        <p>游客</p>
                        <p>时间</p>
                        <p>内容</p>
                    </div>
                </li>

                <li>列表2</li>
                <li>列表3</li>
                <li>列表4</li>
                <li>列表5</li>
                <li>列表6</li>
                <li>列表7</li>
                <li>列表8</li>
            </ul>

        </div>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    export default {
        name: "Comment",
        data() {
            return {
                sendMessage: "发送~", //按钮的文字
                textContent: "", //评论内容
            }
        },
        methods: {
            /*发送评论按钮 点击后指向函数*/
            sendComment() {
                //去除空格
                let text = this.textContent.replace(' ', '');
                text = text.trim();


                // 判断内容是否为空
                if (text.length <= 0) {
                    this.sendMessage = "内容不能为空~";
                    setTimeout(() => {
                        this.sendMessage = '发送~';
                    }, 1000)
                } else {
                    //再次去除前后空格
                    text.trim();

                    this.sendMessage = "咻~~";

                    setTimeout(() => {
                        this.sendMessage = '发送~';
                    }, 1000)

                    let textContent = text;
                    console.log(textContent)

                }
            }
        }
    }
</script>

<!-- ---------------------------样式区--------------------------- -->
<style scoped>
    /*文字*/
    #comment h4 {
        margin-bottom: 10px;
        font-size: 18px;
    }

    #comment {
        background: #fff;
        padding: 15px;
        border-radius: 5px;
    }

    .textInput {
        margin-bottom: 15px;
    }

    /*-----------------------------------------------发送评论按钮--------------------------------------------------*/
    .sendBtn {
        background: #97dffd;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        font-size: 14px;
        color: white;

        cursor: pointer;
        transition: 0.4s;
    }

    .sendBtn:hover {
        background: #786b96;
    }

    /*-----------------------------------------------评论详情--------------------------------------------------*/
    /*数量相关*/
    .comment-count {
        display: block;
        margin: 40px 0px;

        padding: 5px 0px 5px 20px;
        border-left: black solid 3px;

        font-size: 18px;
        /*font-weight: 700    ;*/
    }

    /*具体评论*/
    .content-list {
        list-style: none;
        line-height: 40px;
    }

    .content-list li {
        border-bottom: 1px solid red;
    }


    /**
        信息相关样式
     */
    .img-left {
        float: left;
        margin-right: 20px;
        width: 70px;
        height: 70px;
        border: 1px solid red;
    }
    .img-left img{
        width: 100%;
    }

    .img-right {
        margin: 15px 0px 15px 90px;
        border: 1px red solid ;
    }

    .img-right p {

        display: block;
        width: 100%;

        word-break:break-all;
        line-height: 22px;
    }

</style>