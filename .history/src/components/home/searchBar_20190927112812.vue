<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name='search' size='16px' color='#858c86'></van-icon>
      <input class="search-bar-input" />
       <van-icon name="clear" size='16px' color='#858c86'></van-icon>
    </div>
  </div>
</template>
<script>
export default {
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
      background: #F5F7F9
      .search-bar-input{

      }
    }
  }
</style>