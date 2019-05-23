import Vue from 'vue'
import Router from 'vue-router'

// 引入组件 @/表示src/
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'



// 注册全局组件 router-view router-link
// 挂载vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性，所有的this其实就是Vue的子类对象
Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})