<template>
    <div class="tmp1">
        <nav-bar title="新闻列表"></nav-bar>
        <div class="demo">
            <ul>
                <li v-for="news in newslist" :key="news.id">
                    <router-link :to="{name:'news.detail',query:'news.id'}">
                        <div class="pic">
                            <div :style="{backgroundImage:'url('+news.img_url+')'}"></div>
                        </div>
                        <div class="content">
                            <span>{{ news.title }}</span>
                            <div class="news-desc">
                                <p>点击数：{{ news.click_count }}</p>
                                <p>发表时间：{{ news.add_time | convertTime('YYYY-MM-DD') }}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'news-list',
  data () {
    return {
        newslist:[]
    }
  },
  // created 适合操作数据
  created () {
      this.$axios.get('http://localhost:8888/')
      .then(res=>{
          console.log('news',res.data.newslist)
          this.newslist = res.data.newslist
      })
      .catch(err=>{
          console.log('新闻列表获取失败'+err)
      })
  }
}
</script>
<style scoped>
.demo {
    padding: 0 .5rem 55px;
}
.demo li {
    margin: 1rem 0;
}
.demo a {
    display: block;
    height: 4rem;
    color: #000;
}
.content {
    float: right;
    width: calc(100% - 4rem);
    height: 4rem;
    margin-left: 4rem;
    line-height: 2rem;
}
.news-desc {
    vertical-align: bottom;
}
.pic {
    position: relative;
    width: 4rem;
}
.pic div {
    position: absolute;
    width: 100%;
    padding-top: 100%;
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
}
.demo a p {
    margin: 0;
    float: left;
    color: #0bb0f5;
    font-size: 14px;
}
.demo p:nth-child(2) {
    float: right;
}
</style>