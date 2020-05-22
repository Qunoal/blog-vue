/**
 *  日期格式化转化
 *
 *  格式: 2020-12-03 20/2/1
 *  参数:
 *      date:Date对象
 *      str1: 年月日 用什么分割
 *      str2: 时分秒 用什么分割
 */

export function DateToString(date, str1, str2) {
    
    let year = date.getFullYear();  //年
    let month = date.getMonth() + 1;//月份是从0开始的
    let day = date.getDate();       //日
    let hour = date.getHours();     //时
    let min = date.getMinutes();     //分
    let sec = date.getSeconds();     //秒

    month = (month < 10 ? "0" + month : month);
    day = (day < 10 ? "0" + day : day);
    hour = (hour < 10 ? "0" + hour : hour);
    min = (min < 10 ? "0" + min : min);
    sec = (sec < 10 ? "0" + sec : sec);

    let newDateString = year + str1 + month + str1 + day + ' ' + hour + str2 + min + str2 + sec

    return newDateString;

}