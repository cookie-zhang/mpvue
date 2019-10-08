<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img" :style="{backgroundImage:'url('+img+')'}">
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
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    .bg-img{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 125px;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .title{
        margin-top: 
      }
    }
  }
</style>