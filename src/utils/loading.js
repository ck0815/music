/**
 * 全局的loading 方法
 * 所有发起请求时显示loading
 *
 **/
import _ from 'lodash'
import {
  Loading
} from 'element-ui'

let loading
let needLoadingRequestCount = 0

function startLoading () {
  loading = Loading.service({
    lock: true
  })
}

function endLoading () {
  loading.close()
}

const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    _.debounce(tryCloseLoading, 300)()
  }
}