<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img" :style="{backgroundImage:backImg}">
      <div class="title">{{title}}</div>
      <div class="sub-title">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    img:String,
    title:String,
    subTitle:String
  },
  computed:{
    backImg(){
      return 'url('+this.img+')'
    }
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>