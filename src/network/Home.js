import {base} from "./Base.js"

/**
 * 获取所有的文章数据加上底部评论数据
 */
export function findArticleList(page) {
    return base({
        url: '/findArticleList',
        params: {
            page: page
        }
    })
}