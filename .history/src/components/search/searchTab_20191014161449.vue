<template>
  <div class="search-table-wraper">
    <div class="search-table-inner">
      <div class="search-table">
        <div class="book-img-wraper">
          <imgView
            src='https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg'
            height='100px'
            width='100px'
          />
        </div>
        <div class="book-info-wraper">
          <div class="book-title">11</div>
          <div class="book-author">22</div>
          <div class="book-category">33</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgView from '@/components/base/imaView'
export default {
  props:{
   
  },
  data(){
    return{}
  }
}
</script>
<style lang="scss" scoped>
  .search-table-wraper{
    .search-table-inner{
      .search-table{
        .book-img-wraper{}
        .book-info-wraper{
          .book-title{}
          .book-author{}
          .book-category{}
        }

      }
    }
  }
</style>