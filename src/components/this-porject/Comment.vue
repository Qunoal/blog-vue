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

            <p class="sendBtn" @click="sendComment">{{sendMessage}}</p> <!--发送按钮-->

            <!--————————————————————————数组中取出数据————————————————————————-->
            <p class="comment-count">捕捉{{commentsInfos.length}}条</p>


            <!-- 没有评论 直接显示一句话 -->
            <div v-if="commentsInfos.length <= 0" style="text-align: center;">
                <h2>没有评论,说点什么吧</h2>
            </div>

            <!-- 有就展示评论信息 -->
            <ul v-else class="content-list">
                <!--———————————————————————————————————遍历数组——————————————-->
                <li v-for="item in reverseArray">
                    <div class="img-left">
                        <img src="~@/assets/img/common/Tourists-Logo.jpg" alt="出错了">
                    </div>

                    <div class="img-right">
                        <p class="user-name">游客</p>
                        <p class="release-date">{{item.time}}</p>

                        <p v-if="item.content.length <= 0" style="color: red"> [空内容]</p>
                        <p v-else class="content"> {{item.content}}</p><!-- 有个BUG，内容为空头像移位：待修复-->
                    </div>
                </li>
            </ul>

            <!-- 加载更多,有评论就显示，少于8就不显示-->
            <span v-if="commentsInfos.length > 5">
                <div class="comment-loading-more" @click="commentLoadMore">
                    <span>点击加载更多</span>
                </div>
            </span>

        </div>
    </div>
</template>

<!-- ---------------------------脚本区--------------------------- -->
<script>
    // 日期转换工具
    import {DateToString} from '@/assets/js/utils'

    /**
     * 网络请求
     */
    import {saveComment} from "../../network/Comment";

    export default {
        name: "Comment",
        props: {
            commentsInfos: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isShowBtn: true,  // 发送评论是否可点击
                sendMessage: "发送~", //按钮的文字
                textContent: "", //采集输入的内容
                contents: [],    // 评论数量,和内容

            }
        },
        computed: {
            reverseArray() {
                return this.commentsInfos.reverse();
            }

        },
        methods: {
            /*发送评论按钮 拿到数据，在经过处理，在真正的发送*/
            sendComment() {
                //去除空格
                let text = this.textContent.replace(' ', '');
                text = text.trim();

                // 判断内容是否为空:
                if (text.length <= 0) {
                    this.sendMessage = "内容不能为空~";
                    setTimeout(() => {
                        this.sendMessage = '发送~';
                    }, 1000)
                } else {

                    // 是否可以点击发送按钮,默认true:可以
                    if (this.isShowBtn) {
                        //直接不让点击按钮了 2秒延迟,才让点
                        this.isShowBtn = false
                        setTimeout(() => {
                            this.isShowBtn = true;
                        }, 2000)


                        //再次去除前后空格
                        text.trim();

                        this.sendMessage = "咻~~";

                        setTimeout(() => {
                            this.sendMessage = '发送~';
                        }, 1000)

                        let textContent = text;

                        // 发布评论,真正的发送
                        this.sendContent(textContent);
                        this.textContent = ""; //发完评论后空

                    } else {
                        this.$message.error({
                            duration: 1500,
                            message: "太快了,骚后再试~",
                        })
                    }
                }
            },

            // 发布内容
            sendContent(textContent) { // 参数:经过处理的评论内容文字

                //定义一个对象
                let comment = {};

                //判断是个模板下面的评论
                if (this.$route.path == "/detailPage") {
                    // 表示是文章详情下面的评论
                    if (this.commentsInfos.length <= 0) {
                        // 没有评论
                        comment = {
                            // 发布日期
                            'time': DateToString(new Date(), "-", ":"),
                            // 内容
                            'content': textContent,
                            'belongCategory': null,
                            'belongArticle': this.$route.query.aid,//直接获取路径上的id
                        };
                    } else {
                        // 有评论
                        comment = {
                            // 发布日期
                            'time': DateToString(new Date(), "-", ":"),
                            // 内容
                            'content': textContent,
                            'belongCategory': this.commentsInfos[0].belongCategory,
                            'belongArticle': this.commentsInfos[0].belongArticle,//拿到id
                        };
                    }

                } else {
                    //其它模板下的评论
                    comment = {
                        // 发布日期
                        'time': DateToString(new Date(), "-", ":"),
                        // 内容
                        'content': textContent,
                        'belongCategory': this.$route.path.replace("/", ''),
                        'belongArticle': null,
                    };
                }

                this.commentsInfos.push(comment) //unshift() 头部添加数据

                // 发送真正的网络请求
                saveComment(comment)

                this.$message.success({duration: 1000, message: "发布成功！"})
            },

            // 加载更多评论按钮
            commentLoadMore() {
                this.$message.error({
                    duration: 1500,
                    message: "没了，别点了",//发送网络请求，请求更多评论
                })
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
        border-bottom: 1px solid #e5eaed;
    }

    /**
        个人信息相关样式
     */
    .img-left {
        float: left;
        margin-right: 20px;
        width: 70px;
        height: 70px;
        /*border: 1px solid red;*/
    }

    .img-left img {
        width: 100%;
    }

    .img-right {
        margin: 15px 0px 15px 90px;
        /*border: 1px red solid;*/
        font-size: 12px;
    }

    .user-name {
        color: black;
        font-size: 14px;
        font-weight: 700;
    }

    .img-right p {
        display: block;
        width: 100%;

        word-break: break-all;
        line-height: 22px;
    }

    /*发布时间*/
    .release-date {
        color: #aaa;
    }

    .content {
        color: #444;
        /*height: 20px;*/
        line-height: 20px;
    }


    /************************************评论加载更多按钮**************************/
    .comment-loading-more {
        background: #97dffd;
        max-width: 100%;
        line-height: 30px;
        margin-top: 15px;

        text-align: center;
        font-size: 14px;
        color: white;

        transition: 0.4s;
    }

    .comment-loading-more:hover {
        background: #48456D;
        cursor: pointer;
    }
</style>