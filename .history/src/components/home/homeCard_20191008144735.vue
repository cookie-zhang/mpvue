<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wraper">
          <ImageView src='https://www.youbaobao.xyz/mpvue-res/logo.jpg' round height='20px' />
        </div>
        <div class="nickname">{{'藤山长老'}}</div>
        <div class="shelf-text">书架共有{{3}}本好书</div>
        <div class="round-item">|</div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wraper">
          <ImageView  src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg' height='200px' />
          <ImageView  src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg' height='200px' />
          <ImageView  src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg' height='200px' />
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name='arrow' size='11px'></van-icon>
        </div>
      </div>
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
  components:{
    ImageView
  }
}
</script>

<style lang="scss" scoped>
  .home-card{
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
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
          margin-left: 8.5px;
          color: #fff;
          font-size: 12px;
        }
        .shelf-text{
          opacity: 0.7;
        }
        .round-item{
          color: #a2a2a2!important;
          margin: 0px 8px;
        }
      }
      .book-info{
        display: flex;
        .book-wraper{
          flex: 1;
         display: flex;
        }
        .shelf-wrapper{
          display: flex;
          align-items: center;
          .shelf{
            width: 11px;
            font-size: 11px;
            word-break: break-all;
            color: #fff;
            opacity: .8;
          }
        }
      }
      .feedback-wrapper{

      }
    }
  }
</style>