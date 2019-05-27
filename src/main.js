import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'  // 同 import './assets/css/global.css'
// import '@/assets/css/common.css'

// 引入自己的ul和li组件
import MyUL from '@/components/Common/MyUL'
import MyLI from '@/components/Common/MyLI'
// 注册全局组件
Vue.component(MyUL.name,MyUL)
Vue.component(MyLI.name,MyLI)
import NavBar from '@/components/Common/NavBar'
Vue.component(NavBar.name,NavBar)

// 定义moment全局日期过滤器
import Moment from 'moment'
// {{ 'XXX' | convertTime('yyyy-mm-dd') }}
// {{ 'XXX' | convertTime('yyyy年mm月dd日') }}
Vue.filter('convertTime',function(data,formatStr){
  return Moment(data).format(formatStr)
})

// 配置MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)

// 配置axios
import Axios from 'axios'
// 配置公共URL
Vue.prototype.$axios = Axios
Axios.defaults.baseURL =  'http://localhost:8888/'

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
