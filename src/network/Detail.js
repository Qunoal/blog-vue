import {base} from "./Base"

export function detailInfo(aid) {

    return base({
        url: '/findOne',
        params: {
            aid: aid,
        }
    })
}