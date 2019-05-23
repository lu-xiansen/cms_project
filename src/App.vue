<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/首页.png" alt="">首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/会员.png" alt="">会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/购物车空.png" alt="">购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/查找.png" alt="">查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected: ''
    }
  },
  watch:{
    selected(newVal,oldVal){
      console.log(newVal,oldVal)
    }
  }
}
</script>
<style>

</style>
