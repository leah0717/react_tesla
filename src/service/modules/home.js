import xtRequest from '../index'

const LoginAPI = {
  AccountLogin: '/adminOauthUser/login',
  LoginUserInfo: '/adminOauthUser/getCurAdminUser',
  UserMenu: '/adminMenuMng/getUserMenuTree',
  UserFuncMenu: '/adminMenuMng/getUserFuncMenu'
}
// 需要传递参数且有loading的post请求
export function accountLoginRequest(data) {
  return xtRequest.post({
    url: LoginAPI.AccountLogin,
    data
  })
}
// 需要传递参数没有loading的post请求
export function userInfoRequest() {
  return xtRequest.post({
    url: LoginAPI.LoginUserInfo,
    showLoading: false
  })
}
// 需要传递参数且有loading的get请求
export function getPageInfoData(url, queryInfo) {
  return xtRequest.get({
    url: url,
    params: queryInfo
  })
}
