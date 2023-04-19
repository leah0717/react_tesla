/**
 * @description 导出默认网路配置
 **/
const URLS = new Map([
  ['development', 'http://39.107.29.184:7001/admin'],
  ['production', 'http://39.107.29.184:7001/admin'],
  ['default', 'http://39.107.29.184:7001/admin']
])

export const network = {
  BASE_URL: URLS.get(process.env['NODE_ENV']) || URLS.get('default'),
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  TIME_OUT: 5000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 422,
  //无权限code
  noPermissionCode: 401,
  //用户名或密码错误
  noUser: 400,
  // token不正确
  invalidToken: 407
}
export default network
