// socket功能
import SockJS from "sockjs-client"
import Stomp from "stompjs"
// import store from '../store'
// 状态管理
// import store from '@/store'

// console.log(SockJS, 'SockJS....')
// console.log(Stomp, 'Stomp....')
export const webSocket = {
  // 实例
  stompClient: null,
  subscribeWebScoket:null,

  // 初始化 建立连接对象
  init () {
    //连接服务端提供的通信接口，连接以后才可以订阅广播消息
    let socket = new SockJS('/api/resource/websocket',{ transports: ['websocket'] })
    // 获取STOMP子协议的客户端对象
    this.stompClient = Stomp.over(socket)
    // this.stompClient.debug = null

    // 向服务器发起websocket连接
    this.stompClient.connect({}, () => {
      console.log('连接成功。。。')
      // 关闭上一次链接
      // this.disconnect()
      // 订阅所有服务
      //this.subscribeSocket(url)
    }, () => {
      // 连接发生错误时的处理函数
      console.log('连接失败。。。')
      this.reconnect()
    })
  },

  reconnect () {
    const reconInv = setInterval(() => {
      let socket = new SockJS('/api/resource/websocket')
      this.stompClient = Stomp.over(socket)
      this.stompClient.connect({}, () => {
        console.info('reconnected success')
        // 连接成功，清除定时器
        clearInterval(reconInv)
        this.subscribeSocket()
      }, () => {
        console.error('reconnect failed')
      })
    }, 30000)
  },

  //关闭订阅服务
  unsubscribeSocket(){
     this.subscribeWebScoket.unsubscribe()
  },

  // 订阅服务
  subscribeSocket (url, callback) {
    this.subscribeWebScoket= this.stompClient.subscribe(url, callback)
    // 云平台同步日志及进度
    // this.stompClient.subscribe(url, (msg) => {
    //   let data = JSON.parse(msg.body)
    //   store.commit('SET_SOCKET_DATA', data)
    //   // 1 页面调用订阅方法后 创建新的订阅 接收到返回的数据后 分类存储在vuex中 页面监听vuex中 对应的字段的数据变化
    //   // 2 页面调用订阅方法后 参数(唯一属性,回调函数) 创建新的订阅 接收到返回的数据后 调用回调函数得到数据进行操作
    // })
    // this.stompClient.subscribe('/user/sendUsers', (msg) => {
    //   console.log(JSON.parse(msg.body), '接收消息')
    //   // msg.body 存放的是服务端发送给我们的信息
    //   // 1 页面调用订阅方法后 创建新的订阅 接收到返回的数据后 分类存储在vuex中 页面监听vuex中 对应的字段的数据变化
    //   // 2 页面调用订阅方法后 参数(唯一属性,回调函数) 创建新的订阅 接收到返回的数据后 调用回调函数得到数据进行操作
    // })
  },

  // 向服务发送信息 功能暂时没做
  sendData () {
    // 设置待发送的消息内容
    let params = {
      destination: '/topic/vm/subscribe',
      content: '123456'
    }
    // 发送消息
    this.stompClient.send('/vm/subscribe', {}, JSON.stringify(params))
  },

  // 断开连接
  disconnect () {
    if (this.stompClient) {
      this.stompClient.disconnect()
      console.log("断开连接")
    }
  }
}

//抛出websocket对象
export default {
  install: function (Vue) {
    Vue.prototype.$websocket = webSocket
  }
}



