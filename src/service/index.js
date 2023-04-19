// import dataCache from '@/utils/data-cache'
import XTRequest from './request'
import { network } from './request/config'

const xtRequest = new XTRequest({
  baseURL: network.BASE_URL,
  timeout: network.TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      //   const token = dataCache.getCache('userToken', true)
      //   if (token) {
      //     if (config.headers) {
      //       config.headers['adminUserToken'] = token
      //     }
      //   }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default xtRequest
