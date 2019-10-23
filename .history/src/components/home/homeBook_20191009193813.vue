<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(item, index) in bookData" :key="index">
        <div class="home-book-col" :style="{flex: '0 0'+(100/col)+'%'}" v-for="(book,bookIndex) in item" :key="bookIndex">
          <div class="book-wraper" :style="{ flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row' }"
            @click="onBookClick"  v-if=" mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW " >
            <ImageView :src='book.cover' height='100px' />
            <div class="book-title-wraper  book-title-col" v-if=" mode ===  HOME_BOOK_MODE.COL ">
              <div class="book-title">{{book.title}}</div>
            </div>
            <div class="book-title-wraper  book-title-row" v-else>
              <div class="book-title">{{book.title}}</div>
              <div class="book-title-author-wraper">
                <div class="book-title book-author">{{book.author}}</div>
                <div class="book-title book-categoryText">{{book.categoryText}}</div>
              </div>
            </div>
          </div>
          <div class="category-wraper">
            <div class="category-text">{{book.categoryText}}</div>
            <div class="category-num">{{book.num}}本书</div>
            <div class="category-img-wraper">
              <div class="category-img1">
                <ImageView :src='book.cover' height='60px'></ImageView>
              </div>
              <div class="category-img2">
                <ImageView :src='book.cover2' height='30px'></ImageView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="home-book-footer" v-if="showBtn">
      <van-button round custom-class='home-book-btn' @click="onMoreClick">{{btnText}}</van-button>
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
      console.log(this.mode)
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
    onMoreClick(){
      this.$emit('onMoreClick')
    },
    onBookClick(){
      this.$emit('onBookClick')
    }
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
          .category-wraper{
            position: relative;
            display: flex;
            background: #F8F9FB;
            border-radius: 10px;
            height: 96px;
            padding: 13px 0 0 16px;
            box-sizing: border-box;
            .category-text{
              color: #212832;
              font-size: 16px;
              line-height: 22.5px;
            }
            .category-num{
              color: #868686;
            }
            .category-img-wraper{
              position: absolute;
              right: 0;
              bottom: 0;
              .category-img1{
                position: absolute;
                right: 0;
                bottom: 0;
                z-index: 100;
                width: 60px!important;
                box-sizing: border-box;
              }
              .category-img2{
                position: absolute;
                right: 30px;
                bottom: 0;
                z-index: 90;
                width: 50px!important;
                box-sizing: border-box;
              }
            }
            .category-text{}
          }
        }
      }
    }
    .home-book-footer{
      margin-top: 12px;
      padding: 12px 20px 20px;
    }
  }
</style>
<style lang='scss'>
  .home-book-footer{
      .home-book-btn{
        width: 100%;
        font-size: 14px;
        color: #3696EF;
        border: 1px solid #edeeee;
      }
    }
</style>