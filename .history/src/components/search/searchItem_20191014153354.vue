<template>
  <div class="search-wraper">
    <div class="search-item-icon">
      <div class="icon-wraper">
        <van-icon name='apps-o' color='rgba(0,0,0,.5)' size='32px'/>
      </div>
    </div>
    <div class='search-item-info'>
      <div class="search-item-title">{{title}}</div>
      <div class="search-item-sub-title">1222222</div>
    </div>
  </div>
</template>
<script>
export default {
  prosp:{
    title: String,
    subTitle: String,
    icon: String
  },
  data(){
    return{}
  }
}
</script>
<style lang="scss" scoped>

</style>