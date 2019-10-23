<template>
  <div class="auth-wraper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView src='https://www.youbaobao.xyz/mpvue-res/logo.jpg' height='70px' round />
        </div>
        <div class="sub-title">小木读书</div>
        <div class='title'>全球好书免费读</div>
      </div>
      <button class="auth-button">授权登录</button>
    </div>
  </div>
</template>
<script>
import ImageView from './imgView'
export default {
  components:{
    ImageView
  }
}
</script>
<style lang="scss" scoped>
  .auth-wraper{
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #999;
    z-index: 1000;
    .auth{
      width: 270px;
      height: 248px;
      background: #f5f5f5;
      border-radius: 18px;
      .auth-info{
        margin-top: 22.5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .auth-img{
          width: 74px;
        }
        .sub-title{
          font-size: 13px;
          color: #999;
          line-height: 18.5px;
          margin-top: 8px;
        }
        .title{
          font-size: 16px;
          color: #333;
          line-height: 22.5px;
          margin-top: 3.5px;
        }
      }
      .auth-button{
        background: #
      }
    }
  }
</style>