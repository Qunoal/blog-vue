import {base} from "./Base";

/**
 * 获取红心数量（Do you like the Blog的点赞数）
 */
export function getRedHeartNumber() {
    return base({
        url: '/redHeartNumber'
    })
}

/**
 * 发送点赞的网络请求
 */
export function increase() {
    return base({
        url: "/increase"
    })
}


/**
 * 大家都在说：评论信息
 */
export function newComment() {
    return base({
        url: "/findNewComment"
    })
}


/**
 * 根据id查询文章标题
 */
// export function findTitle(id) {
//     return base({
//         url: "/findTitle",
//         params: {
//             aid: id,
//         }
//     })
// }

/**
 * 获取观看人数最多的文章
 */
export function findRecommendArticle() {
    return  base({
        url: "/findRecommendArticle"
    })
}