<template>
    <div>
      <nav-bar title="新闻详情"></nav-bar>
      <h1>新闻标题</h1>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  created(){
    // $route是信息对象  $router是操作对象,会有一些方法
    // console.log(this.$route)

    // 获取路由查询字符串参数id啊
    let id = this.$route.query.id
    this.$axios.get("newsDetail.json")
    .then(res=>{
      console.log("newsDetail",res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>
<style scoped>

</style>
