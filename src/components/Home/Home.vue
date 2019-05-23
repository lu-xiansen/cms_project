<template>
    <div>
        <!-- 上有轮播图，下有九宫格 -->
        <mt-swipe>
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img :src="img.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>

export default {
    data(){
        return {
           imgs:[] 
        }
    },
    // created创建组件的生命周期函数中，可以操作数据
    created () {
        this.$axios.get("http://192.168.43.171:8888/")
        .then(res=>{
            // res.data.message = [{img:'图片地址'}]
            console.log(res)
            this.imgs = res.data;
            console.log(this.imgs)
        })
        .catch(err=>{
            console.log('轮播图获取数据异常',err)
        })
    }
}
</script>
<style>
    .mint-swipe {
        height: 200px;
    }
</style>

