import axios from "axios"

export function base(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: "http://127.0.0.1:8080",
        timeout: 5000,
    })

    // 响应拦截
    // instance.interceptors.response.use(res => {
    //     return res
    // })

    //发送真正的网络请求
    return instance(config);
}