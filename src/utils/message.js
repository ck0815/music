/*
  处理多次提示
  当同时触发多次提示时只会提示第一个弹窗
  调用方法 - 基础版
  messages.notify({
    offset: 100,
    type: 'error',
    message: res.data.message
  })
*/
import {
  Message
} from 'element-ui'

const showMessage = Symbol('showMessage')
class DonMessage {
  [showMessage] (options, single) {
    // console.log(options, single)
    if (single) {
      // 判断是否已存在notification
      if (document.getElementsByClassName('el-message').length === 0) {
        Message(options)
      }
    } else {
      Message(options)
    }
  }

  notify (options, single = true) {
    this[showMessage](options, single)
  }
}
export default new DonMessage()