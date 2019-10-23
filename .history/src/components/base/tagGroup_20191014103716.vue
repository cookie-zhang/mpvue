<template>
  <div class="tag-group-wraper">
    <div class="tag-group-header">
      <div class="header-text"></div>
      <div class="header-btn"></div>  
    </div>
    <div class="tag-group">
      <div class="tag-group-inner">
        <Tag />
      </div>  
    </div> 
  </div>   
</template>
<script>
import Tag from './tag'
export default {
  props:{},
  components:{
    Tag
  }
}
</script>