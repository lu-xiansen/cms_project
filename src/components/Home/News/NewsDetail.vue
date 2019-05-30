<template>
    <div>
      <nav-bar title="新闻详情"></nav-bar>
      <h1>{{newsDetail.title}}</h1>
      <p>{{newsDetail.content}}</p>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      newsDetail:[]
    }
  },
  created(){
    // $route是信息对象  $router是操作对象,会有一些方法

    // 获取路由查询字符串参数id啊
    let id = this.$route.query.id;
    this.$axios.get("newsDetail.json")
    .then(res=>{
      console.log("newsDetail",res)
      this.newsDetail = res.data.newsDetail[0]
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>
<style scoped>

</style>
