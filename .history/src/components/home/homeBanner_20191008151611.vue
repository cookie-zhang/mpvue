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
          <div class="book-img-wraper">
            <ImageView  src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg' height='101px' />
          </div>
          <div class="book-img-wraper">
            <ImageView  src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg' height='101px' />
          </div>
          <div class="book-img-wraper">
            <ImageView  src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg' height='101px' />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name='arrow' size='11px' color='#828489'></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedBackClick">反馈</div>
    </div>
    <van-dialog id='van-dialog' />
  </div>
</template>

<script>
import ImageView from '../base/imgView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {

  methods:{
  }
}
</script>

<style lang="scss" scoped>

</style>