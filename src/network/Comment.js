import {base} from "./Base";

/**
 * 保存评论
 * @returns {AxiosPromise}
 */
export function saveComment(object) {
    return base({
        method: 'post',
        url: "/saveComment",
        data: {
            // object,
            'time': object.time, //  评论的时间
            'content': object.content, // 内容
            'belongCategory': object.belongCategory, // 属于哪的评论
            'belongArticle': object.belongArticle,//评判属于那个文章
        },
    })
}

/**
 *  其它模板查询评论信息  如：关于下面的评论，赞赏下面的评论
 * @param path
 */
export function findComment(belong) {
    return base({
        url: '/findBelong',
        params: {
            belong: belong,
        }
    })
}