/**
 * http配置
 * this.$http.get('/api/aaa',{ params : {}}).then(res=>{ })
 * this.$http.post('/api/bbb', data).then(res=>{ })
 *
 * // 全局loading 调用
 * this.$http.get('/api', { params: query, showLoading: true})
 * this.$http.post('/api', data,{showLoading: true})
 */

// 引入axios
import axios from 'axios'
// 引入包
import queryString from 'querystring'
// 弹框
import messages from '@/utils/message'
// 状态
import store from '@/store'
// 异常数据 需要路由跳转 或者通过 store 状态中心跳转
import router from '@/router/router'

// 请求 loading 方法
import {
  showFullScreenLoading,
  tryHideFullScreenLoading
} from '@/utils/loading.js'

import {
  notValidUrl
} from '@/utils/config.js'


// 创建axios实例
const $ = axios.create({
  // 超时时间30s
  timeout: 30000
})

// 配置请求路径公共部分,允许设置自定义的头信息
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded;charset=utf-8'

// http请求拦截器
$.interceptors.request.use(
  config => {
    // console.log(config, 1111)
    // 判断当前请求是否需要显示loading
    if (config.showLoading) {
      showFullScreenLoading()
    }

    // 判断全局json请求不做序列化处理
    if (
      config.headers['Content-Type'] !== 'application/json' &&
      config.headers['Content-Type'] !== 'multipart/form-data'
    ) {
      // POST数据转换
      var data = config.data
      config.data = queryString.stringify(data)
    }

    // 全局配置接口代理转发
    config.url = '/api' + config.url
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http响应拦截器
$.interceptors.response.use(
  res => {
    // 判断当前请求是否需要显示loading
    if (res.config.showLoading) {
      tryHideFullScreenLoading()
    }

    // console.info('返回状态', res)
    if (typeof res.data === 'string') {
      return res
    } else {
      // post导出判断
      // 如果包含此url，则不进行拦截
      if (notValidUrl.some(v => v.includes(res.config.url))) {
        return res
      } else if (res.data.code !== 200) {
        messages.notify({
          offset: 100,
          type: 'error',
          message: res.data.message
        })
      }
    }
    return res
  },
  error => {
    // 判断当前请求是否需要显示loading
    tryHideFullScreenLoading()

    // 返回状态
    if (error.response) {
      let message = JSON.parse(error.request.response).message
      // console.info('返回状态', error.response.status)
      switch (error.response.status) {
        case 400:
          messages.notify({
            offset: 100,
            type: 'error',
            message: message || '请求参数错误'
          })
          break
        case 401:
          // 401 清除token信息并跳转到登录页面
          messages.notify({
            offset: 100,
            type: 'error',
            message: message || '请登录后访问'
          })
          // 退出通知
          store.commit('LOGIN_OUT')
          store.commit('REMOVE_AUTHMENU')

          // 切换路由
          router.push({
            path: '/login'
          })
          break
        case 403:
          messages.notify({
            offset: 100,
            type: 'error',
            message: message || '用户权限不足'
          })

          // 跳转404页面
          router.push({
            path: '/common/Error',
            query: {
              status: 404
            }
          })
          break
        case 404:

          messages.notify({
            offset: 100,
            type: 'error',
            message: message || '请求接口不存在'
          })

          // 跳转404页面
          router.push({
            path: '/common/Error',
            query: {
              status: 404
            }
          })
          break
        case 500:
          messages.notify({
            offset: 100,
            type: 'error',
            message: message || '服务器未响应'
          })

          // 跳转500页面
          router.push({
            path: '/common/Error',
            query: {
              status: 500
            }
          })
          break
        case 503:
          messages.notify({
            offset: 100,
            type: 'error',
            message: message || '服务可能处于离线、启动中的状态，请稍后再试'
          })
          break
        default:
          messages.notify({
            offset: 100,
            type: 'error',
            message: '错误码：' + error.request.status
          })
      }
    }
    return Promise.reject(error)
  }
)

// 封装 添加提示状态
const defaultConfig = {
  showLoading: false
}
const ajaxObj = {
  get: (url, config) => $.get(url, {
    ...defaultConfig,
    ...config
  }),
  put: (url, data, config) => $.put(url, data, {
    ...defaultConfig,
    ...config
  }),
  post: (url, data, config) =>
    $.post(url, data, {
      ...defaultConfig,
      ...config
    }),
  patch: (url, data, config) =>
    $.patch(url, data, {
      ...defaultConfig,
      ...config
    }),
  delete: (url, data, config) => $.delete(url, {
    ...defaultConfig,
    ...config
  })
}

// 单独引用
export const $http = ajaxObj

// 挂载vue中
export default {
  install: function (Vue) {
    Vue.prototype.$http = ajaxObj
  }
}