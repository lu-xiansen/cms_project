<template>
    <div>
        <!-- 上有轮播图，下有九宫格 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <div :style="{backgroundImage:'url('+img.src+')'}" alt=""></div>
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
        this.$axios.get("http://localhost:8888/")
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
<style scoped>
.mint-swipe {
    height: 200px;
    overflow: hidden;
}
.mint-swipe-item>div{
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>

