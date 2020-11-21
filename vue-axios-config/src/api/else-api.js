import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://182.83.19.15:8080/request/...
 *  @param '/elseIp'代表vue.config.js中配置的代理
 */
let resquest = "/elseIp/request"

// get请求
export function getListAPI(params){
    return http.get(`${resquest}/getList.json`,params)
}
// post请求
export function postFormAPI(params){
    return http.post(`${resquest}/postForm.json`,params)
}
// put 请求
export function putSomeAPI(params){
    return http.put(`${resquest}/putSome.json`,params)
}
// delete 请求
export function deleteListAPI(params){
    return http.delete(`${resquest}/deleteList.json`,params)
}