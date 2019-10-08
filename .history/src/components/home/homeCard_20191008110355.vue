<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <ImageView src='https://www.youbaobao.xyz/mpvue-res/logo.jpg' round />
        <div class="nickname">{{'藤山长老'}}</div>
        <div class="shelf-text">书架共有{{3}}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info"></div>
      <div class="feedback-wrapper"></div>
    </div>
  </div>
</template>

<script>
import ImageView from '../base/imgView'
export default {
  props:{
    data: Object,
    hasSigin:{
      type:Boolean,
      default: false
    },
    signDay:{
      type: Number,
      default: 0
    }
  },
  methods:{
    gotoShelf(){},
    onBookClick(){},
    sign(){}
  },
  components:{ImageView}
}
</script>

<style lang="scss" scoped>
  .home-card{
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 30px;
    margin: 
    .home-card-inner{
      .user-info{

      }
      .book-info{

      }
      .feedback-wrapper{

      }
    }
  }
</style>