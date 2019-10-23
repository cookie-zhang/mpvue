<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(item, index) in bookData" :key="index">
        <div class="home-book-col" :style="{flex: '0 0'+(100/col)+'%'}" v-for="(book,bookIndex) in item" :key="bookIndex">
           <div class="book-wraper" >
             <ImageView :src='book.cover' height='100px'/>
             <div class="book-title-wraper  book-title-col">
                <div class="book-title">{{book.title}}</div>
             </div>
           </div>
        </div>
      </div>  
    </div>    
    <div class="home-book-footer">3</div>
  </div>
</template>

<script>
import ImageView from '../base/imgView'
import { HOME_BOOK_MODE } from '@/utils/const.js'
export default {
   components:{
    ImageView
  },
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
    showBtn:{
      type: Boolean,
      default: true
    },
    linearBg:{
      type: Boolean,
      default: false
    }
  },
  mounted(){
    console.log(this.bookData)
  },
  computed:{
    bookData(){
      const { data, row, col} = this;
      if(data && data.length > 0){
        const number = row * col
        const _bookData = data.slice(0, number)
        const _bookDataRow = []
        let _row = 0
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row*col + col))
          _row++
        }
        return _bookDataRow
      } else {
        return []
      }
    }
  },
  methods:{
    onMoreClick(){},
    onBookClick(){}
  }
}
</script>

<style lang="scss" scoped>
  .home-book{
    .home-book-header{
      padding: 13px 0 0 20.5px; 
    }
    .home-book-content{
      padding: 0 12px;
      margin-top: 22.5px;
      .home-book-row{
        display: flex;
        flex-direction: row nowrap;
        .home-book-col{
          padding: 0 8px;
          box-sizing: border-box;
          .book-wraper{
            .book-title-wraper{
              &.book-title-col{
                .book-title{
                  font-size: 12px;
                  color: #212731;
                  line-height: 16.5px;
                  max-height: 33px;
                  font-weight: 500;
                  overflow: hidden;
                  wo
                }
              }
            }
          }
        }
      }
    }
    .home-book-footer{

    }
  }
</style>