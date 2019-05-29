<template>
    <div>
        <!-- 上有轮播图，下有九宫格 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <div :style="{backgroundImage:'url('+img.src+')'}" alt=""></div>
            </mt-swipe-item>
        </mt-swipe>

        <div class="grid">
            <my-ul>
                <my-li v-for="(grid,index) in grids" :key="index">
                    <router-link :to="grid.router">
                        <span :class="grid.className"></span>
                        <div>{{ grid.title }}</div>
                    </router-link>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           imgs:[],
           grids: [
               {
                   className: 'news',
                   title: '新闻资讯',
                   router: {
                       name: 'news.list'
                   },
               },
               {
                   className: 'share',
                   title: '图文分享',
                   router: {
                       name: 'photo.list'
                   },
                   params:{
                       categoryId: 0
                   }
               },
               {
                   className: 'shangpin',
                   title: '我的商品',
                   router: {
                       name: 'news.list'
                   },
               },
               {
                   className: 'fankui',
                   title: '反馈',
                   router: {
                       name: 'news.list'
                   },
               },
               {
                   className: 'search',
                   title: '搜索',
                   router: {
                       name: 'news.list'
                   },
               },
               {
                   className: 'contact',
                   title: '联系我们',
                   router: {
                       name: 'news.list'
                   },
               }
           ]
        }
    },
    // created创建组件的生命周期函数中，可以操作数据
    created () {
        this.$axios.get("banner.json")
        .then(res=>{
            console.log('banner',res)
            this.imgs = res.data.banner;
        })
        .catch(err=>{
            console.log('轮播图获取数据异常',err)
        })
    }
}
</script>
<style scoped>
.mint-swipe {
    height: 200px;
    overflow: hidden;
}
.mint-swipe-item>div{
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.grid li a {
    color: #333;
}
.grid li span {
    display: inline-block;
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.news {
    background-image: url("../../assets/img/新闻公告.png");
}
.share {
    background-image: url("../../assets/img/分享.png");
}
.shangpin {
    background-image: url("../../assets/img/我的商品.png");
}
.fankui {
    background-image: url("../../assets/img/反馈.png");
}
.search {
    background-image: url("../../assets/img/搜索.png");
}
.contact {
    background-image: url("../../assets/img/联系我们.png");
}
</style>

