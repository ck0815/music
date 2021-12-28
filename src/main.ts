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
// import '@/assets/css/common.less';
// 覆盖样式
import '@/assets/css/reset.less';

createApp(App)
  .use(store)
  .use(router)
  .use(Vant)
  .mount('#app')
