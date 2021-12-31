import { createApp } from 'vue'
import App from './App.vue'

// aa
import './registerServiceWorker'

// 路由
import router from './router'
// vuex
import store from './store'

// Vant ui
import Vant from 'vant';
import 'vant/lib/index.css';

// 公共样式
import '@/assets/css/common.less';
// 覆盖样式
import '@/assets/css/reset.less';
// font
import '@/assets/font/iconfont.js'
// 注册全局 icon-svg
import IconSvg from '@/components/IconSvg.vue'

// vue
const app = createApp(App)

// 注册全局 icon-svg
app.component('icon-svg', IconSvg)
// 注入 vuex
app.use(store)
// 注入 路由
app.use(router)
// 注入 Vant
app.use(Vant)
// 挂载节点
app.mount('#app')

console.log(app, 11111111)
