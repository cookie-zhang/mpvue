<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img">
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
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-banner{
    width: 100%;
    height: 100px;
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: 
    .bg-img{
      background: yellow;
    }
  }
</style>