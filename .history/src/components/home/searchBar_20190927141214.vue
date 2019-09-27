<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name='search' size='16px' color='#858c86'></van-icon>
      <input class="search-bar-input" :focus='focus' />
       <van-icon class="clear" name="clear" size='16px' color='#858c86'></van-icon>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    focus:{
      type: Boolean,
      default: false, //true: input自动聚焦，false 不聚焦    
    }
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
  .search-bar{
    padding: 15px 15.5px;
    .search-bar-wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 20px;
      background: #F5F7F9;
      border-radius: 20px;
      padding: 12px 17px;
      .search-bar-input{
        flex: 1;
        margin: 0 12px;
      }
      .search, .clear{
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>