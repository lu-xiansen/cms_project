<template>
    <div>

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
      // 1 获取路由参数categoryId
      let categoryId = this.$route.params.categoryId;
      console.log(categoryId)
      this.$axios.get('')
      .then(res=>{

      })
      .catch(err=>{
          console.log(err)
      })
  }
}
</script>
<style scoped>

</style>
