<template>
  <div class="home-book">
    <div class="home-book-header"></div>
    <div class="home-book-content"></div>    
    <div class="home-book-footer"></div>
  </div>
</template>

<script>
import { HOME_BOOK_MODE } from '@/util/const.js'
export default {
  props:{
    title: String,
    data:{
      type: Array,
      default: []
    },
    btnText: String,
    row: {
      type: Number,
      default: 0
    },
    col:{
      type: Number,
      default: 0
    },
    mode:{
      type: String,
      default: HOME_BOOK_MODE.ROW
    },
    showTitle:{
      type: Boolean,
      default: true
    },
    showBtn:P{}
  }
}
</script>

<style lang="scss" scoped>
  
</style>