<template>
  <div class="auth-wraper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView src='https://www.youbaobao.xyz/mpvue-res/logo.jpg' />
        </div>
        <div class="sub-title">小木读书</div>
        <div class='title'>全球好书免费读</div>
      </div>
      <button>授权登录</button>
    </div>
  </div>
</template>
<script>
import ImageView from './imgView'
export default {
}
</script>
<style lang="scss" scoped>
  .auth-wraper{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #999;
    z-index: 1000;
    .auth{
      .auth-info{
        .auth-img{}
        .sub-title{}
        .title{}
      }
    }
  }
</style>