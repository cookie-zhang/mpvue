<template>
  <div class="search-table-wraper">
    <div class="search-table-inner">
      <div class="search-table-book" 
        v-for='(book, index) in data'
        :key='index'
        @click="onClick(book)"
      >
        <div class="book-img-wraper">
          <div class="book-img">
            <imgView
              :src='book.cover'
              height='80px'
              width='68.5px'
            />  
          </div>
        </div>
        <div class="book-info-wraper">
          <div class="book-title">{{book.title}}</div>
          <div class="book-author">{{book.author}}</div>
          <div class="book-category">{{book.categoryText}}</div>
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
        margin: 14.5px 0;
        display: flex;
        align-items: center;
        .book-img-wraper{
          .book-img{
            width: 47px;
            height: 68.5px;
          }
        }
        .book-info-wraper{
          width: 70%;
          margin-left: 15.5px;
          .book-title{
            width: 100%;
            color: #333;
            font-size: 16px;
            line-height: 22.5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
          }
          .book-author{
            color:rgba(0, 0, 0, .65);
            font-size: 13px;
            line-height: 18px;
          }
          .book-category{
            color:rgba(0, 0, 0, .45);
            font-size: 13px;
            line-height: 18px;
          }
        }

      }
    }
  }
</style>