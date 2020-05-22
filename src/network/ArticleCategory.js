import {base} from "./Base";

/**
 * 获取所属分类下面的所有文章
 * @param category
 * @returns {*}
 */
export function findCategory(category) {
    return base({
        url: '/findAllCategoryArticleList',
        params: {
            category: category
        }
    })
}

/**
 * 获取几个分类
 * @returns {*}
 */
export function getCategory() {
    return base({
        url: "/findCategory",
    })
}