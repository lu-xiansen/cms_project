import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'  // 同 import './assets/css/global.css'

// 配置MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)

// 配置axios
import Axios from 'axios'
// 配置公共URL
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL =  'https://easy-mock.com/mock/'      //'https://www.sinya.online/api/'

// var Mock = require('mock.js')

// 切换开发和生产模式的提示
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
