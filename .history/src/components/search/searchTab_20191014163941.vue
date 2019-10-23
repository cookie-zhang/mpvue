<template>
  <div class="search-table-wraper">
    <div class="search-table-inner">
      <div class="search-table-book" 
        v-for='(book, index) in data'
        :key='index'
        @click="onClick(book)"
      >
        <div class="book-img-wraper">
          <div class="boo-img">
            <imgView
              :src='book.cover'
              height='100px'
              width='100px'
            />  
          </div>
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
import imgView from '@/components/base/imgView'
export default {
  props:{
   data:Array
  },
  data(){
    return{}
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  },
  components:{
    imgView
  }
}
</script>
<style lang="scss" scoped>
  .search-table-wraper{
    padding: 0 16px;
    .search-table-inner{
      .search-table-book{
        
        .book-img-wraper{
          .book-img{

          }
        }
        .book-info-wraper{
          .book-title{}
          .book-author{}
          .book-category{}
        }

      }
    }
  }
</style>