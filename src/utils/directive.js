/**
 * 全局自定义指令
 */
// import store from '@/store'
import config from '@/utils/config'

// 点击 document
export const clickoutside = {
  // 初始化指令
  bind (el, binding) {
    function documentHandler (e) {
      // console.log(el, e, 11111111111)
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        // console.log('这里判断点击的元素是否是本身，是本身，则返回')
        return false;
      }

      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        // console.log('如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法')
        binding.value(e);
      }
    }

    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },

  unbind (el) {
    // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

// 处理服务地图收藏方法
let menuCollectFn = function (el, binding) {
  // console.log(el, binding)
  let status = false
  for (let i = 0; i < config.MenuCollect.length; i++) {
    const item = config.MenuCollect[i]
    if (binding.value === item.value) {
      // 权限允许则显示组件
      status = true
    }
  }
  // 移除组件
  if (!status) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

/** 服务地图二级菜单显示收藏配置 **/
export const menuCollect = {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  // bind: function (el, binding) { },
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted: (el, binding) => {
    menuCollectFn(el, binding)
  },
  // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
  // 指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
  update: (el, binding) => {
    menuCollectFn(el, binding)
  },
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  // componentUpdated: function (el, binding) { },
  // 只调用一次，指令与元素解绑时调用。
  // unbind: function (el, binding) { }
}

/** 权限指令 自定义权限指令 v-auth="'akc:knowledge:add'" ，显示可操作组件**/
export const auth = {}

// 处理 多个按钮集合 父元素是否显示 v-auths="'akc:asset:import,akc:asset:export,akc:asset:downloadTemplate,akc:asset:delete'"
export const auths = {}

export default {
  clickoutside,
  menuCollect,
  auth,
  auths
}