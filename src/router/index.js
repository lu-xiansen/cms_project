import Vue from 'vue'
import Router from 'vue-router'

// 引入组件 @/表示src/
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/Home/News/NewsList'
import NewsDetail from '@/components/Home/News/NewsDetail'
import PhotoList from '@/components/Home/Photo/PhotoList'

// 注册全局组件 router-view router-link
// 挂载vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性，所有的this其实就是Vue的子类对象
Vue.use(Router)

// 配置路由三步  1.从哪儿跳转<router-link :to{}>   2.配置路由  3.去了干嘛
export default new Router({
    routes: [
        {
            // 首先进行重定向操作，即定位到home
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        // 底部导航
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/member',
            name: 'member',
            component: Member
        },
        {
            path: '/shopcart',
            name: 'shopcart',
            component: Shopcart
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        // 新闻列表
        {
            name: 'news.list',
            path: '/news/list',
            component: NewsList
        },
        // 新闻详情
        {
            name: 'news.detail',
            path: '/news/detail',
            component: NewsDetail
        },
        // 图文分享
        {
            name: 'photo.list',
            path: '/photo/list:cateforyId',
            component: PhotoList
        }
    ]
})