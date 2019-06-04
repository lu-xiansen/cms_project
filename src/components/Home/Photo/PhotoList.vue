<template>
    <div>
      <nav-bar title="图文列表"></nav-bar>
      <div class="photo-header">
        <ul>
          <li v-for="type in photoType" :key="type.id">
            <a @click="loadImageByCategroyId(type.id)" href="javascript:;">{{ type.title }}</a>
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
      imgs:[],
      photoType:''
    }
  },
  // 路由守卫(路由的生命周期)
  beforeRouteUpdate(to,from,next){
    // 在当前路由改变,但是该组件被复用时调用  
    // 举例来说,对于一个带有动态参数的路径 /foo/:id,
    // 在/foo/1 和 /foo/2 之间跳转的时候,
    // 由于会渲染同样的Foo组件,因此组件实例会被复用.而这个钩子就会在这个情况下被调用
    // 可以访问组件实例 this
    // 总结: 路由复用,但参数改变触发
    // 参数指的是 query||params
    console.log(to);
    this.loadImageByCategroyId(to.params.categoryId)
    next();  // 放行
  },
  created(){
      // 1 获取路由参数categoryId
      let categoryId = this.$route.params.categoryId;
      // 把请求定义到方法里,方便其他地方调用
      this.loadImageByCategroyId(categoryId)
      // 请求分类列表
      this.$axios.get('photoType.json')
      .then(res=>{
        console.log("图片分类",res.data.photoType)
        this.photoType = res.data.photoType
        // 向数组的第一个元素添加一个 全部
        this.photoType.unshift({
          title: "全部",
          id:0
        })
      })
      .catch(err=>{
        console.log(err)
      })
  },
  methods:{
    loadImageByCategroyId (categoryId){
      // this.$axios.get('photoList.json'+categoryId)
      this.$axios.get('photoList.json')
      .then(res=>{
        console.log("图片列表",res.data.photoList)
        this.imgs = res.data.photoList;
        // 判断数据长度是否为0
        if(this.imgs.length !== 0){
          // mintui 挂载到vue上的方法
          this.$toast({
            message:'没有内容喽',
            iconClass: 'icon icon-debug'   // 需要引入css文件
          })
        }
      })
      .catch(err=>{
          console.log(err,"图片列表获取失败")
      })
    },
  }
}
</script>
<style scoped>
.photo-header {
  overflow: scroll
}
.photo-header li {
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}
.photo-header ul {
  /* 强制不换行 */
  white-space: nowrap;
  overflow-x: auto;
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
