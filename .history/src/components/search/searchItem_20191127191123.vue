<template>
  <div class="search-wraper" @click="onClick">
    <div class="search-item-icon">
      <div class="icon-wraper">
        <van-icon :name='icon' color='rgba(0,0,0,.5)' :style="{width:'20px',height:'20px'}"/>
      </div>
    </div>
    <div class='search-item-info'>
      <div class="search-item-title">{{title}}1</div>
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
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
 
}
</script>
<style lang="scss" scoped>
  .search-wraper{
    display: flex;
    align-items: center;
    padding: 15px;
    height: 30px;
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
      width: 80%;
      margin-left: 10px;
      .search-item-title{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: 14px;
        line-height: 20px;
      }
      .search-item-sub-title{
        color:rgba(0,0,0,.45);
        font-size: 12px;
        line-height: 16.5px;
      }
    }
  }
</style>