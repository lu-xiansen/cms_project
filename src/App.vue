<template>
  <div id="app">
    <mt-header  title="信息管理系统"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/首页.png" alt="">首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/会员.png" alt="">会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/购物车空.png" alt="">购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/查找.png" alt="">查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected: '',
    }
  },
  methods:{
    // 该调用早于了子组件赋值给父组件的selected
    changeHash () {
      console.log(this.selected)
      // 在vue完成渲染后再执行
      this.$nextTick(function(){
        this.$router.push({
          name: this.selected
        })
      })
    }
  },
  watch:{
    //监视selected这个值
    // selected(newVal,oldVal){
    //     this.$router.push({
    //       name: newVal
    //     })
    // }
  },
  
}
</script>
<style>

</style>
