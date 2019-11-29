<template>
  <div>
    <DetailBook  :book='book'/>
    <DetailStat 
      :readers='book.readers'
      :readerNum='book.readerNum'
      :rankNum='book.rankNum'
      :rankAvg='book.rankAvg'
    />
    <DetailRate
      :rate-value='book.rateValue' 
      @onRateChange='onRateChange'
    />
    <DetailContents 
      :contents='contents'
      @readBook='readBook'
    />
    <!-- <DetailBottom 
      :isInShelf='isInShelf'
      @handleShelf='handleShelf'
      @readBook='readBook'
    /> -->
    <div class="detail-bottom">
      <div class="detail-btn-wrapper">
        <van-button
          :custom-class="isInShelf ? 'detail-btn-remove' : 'detail-btn-shelf'"
          round
          @click="handleShelf"
        >
          {{isInShelf ? '移出书架' : '加入书架'}}
        </van-button>
      </div>
      <div class="detail-btn-wrapper">
        <van-button
          custom-class="detail-btn-read"
          round
          @click="() => readBook()"
        >
          阅读
        </van-button>
    </div>
  </div>
  </div>
</template>
<script>
import DetailBook from '../../components/detail/detailBook'
import DetailBottom from '../../components/detail/detailBottom'
import DetailContents from '../../components/detail/detailContents'
import DetailRate from '../../components/detail/detailRate'
import DetailStat from '../../components/detail/detailStat'
import { bookDetail, bookRankSave, bookContents, bookIsShelf, bookShelfSave, bookShelfRemove } from '../../api'
const OPENID = 'wx1a5c77f69e55e258'
export default {
  data(){
    return{
      book:{},
      contents:[],
      isInShelf:false
    }
  },
  methods:{
     //加入书架 未实现由bug
    handleShelf(){
      if(!this.isInShelf){
        let { fileName } = this.$route.query
        bookShelfSave({fileName, openId: OPENID}).then(res=>{
          this.getBookIsShelf();
        })
      }else{
        let _this = this
        mpvue.showModal({
          title: '提示',
          content: `是否确认将《${this.book.title}》移出书架？`,
          success (res) {
            if (res.confirm) {
               let { fileName } = _this.$route.query
             bookShelfRemove({fileName, openId: OPENID}).then(res=>{
                _this.getBookIsShelf();
             })
            }
          }
        })
      }
    },
    onRateChange(value){
      let { fileName } = this.$route.query
      bookRankSave({
        openId: OPENID,
        fileName:fileName,
        rank:value
      }).then(res=>{
         this.getBookDetail()
      })
    },
    getBookDetail(){
      let { fileName } = this.$route.query
      if(fileName){
        bookDetail({fileName:fileName,openId:OPENID}).then(res=>{
          this.book = res.data.data
        })
      }
    },
    getBookContents(){
      let { fileName } = this.$route.query
      if(fileName){
        bookContents({fileName}).then(res=>{
          this.contents = res.data.data
        })
      }
    },
    getBookIsShelf(){
       let { fileName } = this.$route.query
      if(fileName){
        bookIsShelf({fileName,openId:OPENID}).then(res=>{
         let { data } = res.data
         data.length === 0 ? this.isInShelf = false : this.isInShelf = true
        })
      }
    },
   
    readBook(href){
      const 
      if(href){}
      if(this.book && this.book.fileName){
        this.$router.push({
          path:'/pages/read/main',
          query:{
            fileName: this.book.fileName,
            opf: this.book.opf,
            navigation:this.book.navigation
          }
        })
      }
        

      console.log(href)
    }
  },
  
  mounted(){
    this.getBookDetail();
    this.getBookContents();
    this.getBookIsShelf();
  },
  components:{
    DetailBook,
    DetailContents,
    DetailRate,
    DetailStat,
    DetailBottom
  }
}

</script>


<style lang="scss" scoped>
  .detail-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-top: 1px solid #eee;
    box-shadow: 0 -2px 4px 0 rgba(0,0,0,.1);
    .detail-btn-wrapper {
      flex: 1;
    }
  }
</style>

<style lang="scss">
  .detail-bottom {
    .detail-btn-read {
      width: 100%;
      border: none;
      color: #fff;
      background: #1EA3F5;
      margin-left: 7.5px;
    }
    .detail-btn-shelf {
      width: 100%;
      color: #1EA3F5;
      background: #fff;
      border: 1px solid #1EA3F5;
      margin-right: 7.5px;
    }
    .detail-btn-remove {
      width: 100%;
      color: #F96128;
      background: rgba(255, 175, 155, .3);
      border: 1px solid #FFAF9B;
      margin-right: 7.5px;
    }
  }
</style>