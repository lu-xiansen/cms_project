import Vue from 'vue'
import App from './App.vue'

// 配置MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)

// 配置axios
import Axios from 'axios'
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 切换开发和生产模式的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
