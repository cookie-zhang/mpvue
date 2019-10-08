<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <ImageView src=''/>
      </div>
      <div class="book-info"></div>
      <div class="feedback-wrapper"></div>
    </div>
  </div>
</template>

<script>
import ImageView from '../base/imgView'
export default {
  props:{
    data: Object,
    hasSigin:{
      type:Boolean,
      default: false
    },
    signDay:{
      type: Number,
      default: 0
    }
  },
  methods:{
    gotoShelf(){},
    onBookClick(){},
    sign(){}
  },
  components:{ImageView}
}
</script>

<style lang="scss" scoped>
  .home-card{
    .home-card-inner{
      .user-info{

      }
      .book-info{

      }
      .feedback-wrapper{

      }
    }
  }
</style>