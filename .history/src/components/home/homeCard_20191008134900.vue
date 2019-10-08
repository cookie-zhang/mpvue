<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wraper">
          <ImageView src='https://www.youbaobao.xyz/mpvue-res/logo.jpg' round height='20px' />
        </div>
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
    margin: 22px 20px 0px;
    .home-card-inner{
      padding: 21.5px 17px 20px 20px;
      box-sizing: border-box;
      .user-info{
        display: flex;
        align-items: center;
        .avatar-wraper{
          width: 20px;
          height: 20px;;
        }
        .nickname,.shelf-text{
          color: #fff;
          font-size: 12px;
        }
        .round-item{
          float: left;
          width: 8px;
          height: 8px;
          color: #a2a2a2!important;
          border-radius:50%; 
          margin: 0px 8px;
        }
        .round-item:after{
          co
        }
      }
      .book-info{

      }
      .feedback-wrapper{

      }
    }
  }
</style>