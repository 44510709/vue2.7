import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//wx-jdk
import wx from "weixin-js-sdk";
Vue.prototype.$wx = wx;

import 'vant/lib/index.css';
// 全局引入按需引入UI库 vant
import '@/plugin/vant'

//rem
// 移动端适配
import 'lib-flexible/flexible.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
