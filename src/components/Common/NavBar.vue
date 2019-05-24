<template>
    <div class="cms-s-header">
        <h1>
            <span @click="goback">&#60;</span>
            {{ title }}
        </h1>
    </div>
</template>
<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  methods: {
      goback() {
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>
h1 {
    text-align: center;
}
.cms-s-header {
    background-color: #f7f7f7;
}
</style>
