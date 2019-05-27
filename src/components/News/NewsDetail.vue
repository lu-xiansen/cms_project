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
    // 获取路由查询字符串参数id
    let id = this.$route.query.id;
    this.$axios.get(''+id)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>
<style scoped>

</style>
