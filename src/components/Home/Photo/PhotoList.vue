<template>
    <div>
      <nav-bar title="图文列表"></nav-bar>
      <div class="photo-header">
        <ul>
          <li>
            <a href="javascript:;">类别1</a>
          </li>
          <li>
            <a href="javascript:;">类别2</a>
          </li>
          <li>
            <a href="javascript:;">类别3</a>
          </li>
          <li>
            <a href="javascript:;">类别4</a>
          </li>
          <li>
            <a href="javascript:;">类别5</a>
          </li>
        </ul>
      </div>
      <!-- 下方的图片 -->
      <div class="photo-list">
        <ul>
          <li v-for="img in imgs" :key="img.id">
            <a>
              <!-- <img :src="img.src" alt=""> -->
              <!-- 用mint-ui的懒加载 -->
              <img v-lazy="img.src" alt="">
              <p class="content">
                <span>{{img.title}}</span><br>
                <span>{{img.content}}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      imgs:[]
    }
  },
  created(){
      // 1 获取路由参数categoryId
      let categoryId = this.$route.params.categoryId;
      

      
      // 2 通过url拼接参数发请求
      this.$axios.get('photoList.json')
      .then(res=>{
        console.log(res)
        this.imgs = res.data.photoList
      })
      .catch(err=>{
          console.log(err,"图片列表获取失败")
      })
  }
}
</script>
<style scoped>
.photo-header li {
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}
.photo-header ul {
  /* 强制不换行 */
  white-space: nowrap;
  overflow-x: hidden;
  padding-left: 0px;
  margin: 5px;
}
.photo-list li img {
  display: block;
  width: calc(100% - 30px);
  margin: 0 auto;
}
.content {
  padding: 0 15px 5px;
}
/* 图片懒加载样式 */
image[lazy=loading] {
  width: 40px;
  height: 40px;
  margin: auto;
}
</style>
