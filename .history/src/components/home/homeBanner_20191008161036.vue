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
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
      .sub-title{
        padding: 5px 15px;
        background: #4585ff;
        border: 1px solid #ccc;
        margin-top: 10px;
        font-size: 14px;
        border-radius: 50px;
        color: #fff;
      }
    }
  }
</style>