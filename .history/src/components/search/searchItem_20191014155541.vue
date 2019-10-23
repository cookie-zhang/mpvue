<template>
  <div class="search-wraper">
    <div class="search-item-icon">
      <div class="icon-wraper">
        <van-icon :name='icon' color='rgba(0,0,0,.5)' :style="{width:'20px',height:'20px'}"/>
      </div>
    </div>
    <div class='search-item-info'>
      <div class="search-item-title">{{title}}</div>
      <div class="search-item-sub-title">{{subTitle}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
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
  .search-wraper{
    display: flex;
    align-items: center;
    padding: 15px;
    height: 66.5px;
    .search-item-icon{
      .icon-wraper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #f7f7f9;
      }
    }
    .search-item-info{
      .search-item-title{
        color: #333;
        font-size: 
      }
      .search-item-sub-title{}
    }
  }
</style>