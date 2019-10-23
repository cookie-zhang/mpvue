<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(item, index) in bookData" :key="index">
        <div class="home-book-col" :style="{flex: '0 0'+(100/col)+'%'}" v-for="(book,bookIndex) in item" :key="bookIndex">
          <div class="book-wraper" :style="{ flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row' }" >
            <ImageView :src='book.cover' height='100px'/>
            <div class="book-title-wraper  book-title-col" v-if="mode ===  HOME_BOOK_MODE.COL">
              <div class="book-title">{{book.title}}</div>
            </div>
            <div class="book-title-wraper  book-title-row" v-else>
              <div class="book-title">{{book.title}}</div>
              <div class="book-title-author-wraper">
                <div class="book-title book-author">{{book.author}}</div>
                <div class="book-title book-categoryText">{{book.categoryText}}</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>  
    </div>    
    <div class="home-book-footer" v-if="showBtn">
      <van-button round custom-class='home-book-btn'>{{btnText}}</van-button>
    </div>
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
    HOME_BOOK_MODE(){
      return HOME_BOOK_MODE
    },
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
        margin-top: 10.5px;
        .home-book-col{
          padding: 0 8px;
          box-sizing: border-box;
          .book-wraper{
            display: flex;
            .book-title-wraper{
              &.book-title-col{
                .book-title{
                  font-size: 12px;
                  color: #212731;
                  line-height: 16.5px;
                  max-height: 33px;
                  font-weight: 500;
                  overflow: hidden;
                  word-break: break-word;
                }
              }
              &.book-title-row{
                flex: 0 0 50%;
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content:space-between;
                .book-title{
                  font-size: 14px;
                  color: #1f1f1f;
                  line-height: 18px;
                  max-height: 36px;
                  font-weight: 500;
                  overflow: hidden;
                  word-break: break-word;
                }
                .book-title-author-wraper{
                  .book-author{
                    font-size: 12px;
                    color: #868686;
                    line-height: 14px;
                    max-height: 146px;
                    font-weight: 500;
                  }
                  .book-categoryText{
                    font-size: 12px;
                    color: #868686;
                    line-height: 14px;
                    max-height: 146px;
                    font-weight: 500;
                  }
                }
              }
            }
          }
        }
      }
    }
    .home-book-footer{
      .home-book-btn{}
    }
  }
</style>
<style lang='scss'>
  .home-book-footer{
      .home-book-btn{
        width: 100%;
        margin-bottom: 10px;
      }
    }
</style>