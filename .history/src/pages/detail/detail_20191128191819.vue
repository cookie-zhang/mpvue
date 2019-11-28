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
    <DetailBottom 
      :isInShelf='isInShelf'
      @handleShelf='handleShelf'
      @readBook='readBook'
    />
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
      console.log(1)
      if(!this.isInShelf){
        let { fileName } = this.$route.query
        bookShelfSave({fileName, openId: OPENID}).then(res=>{
          this.getBookIsShelf();
        })
      }else{
        mpvue.showModal({
          title: '提示',
          content: `是否确认将《${this.book.title}》移出书架？`,
          success (res) {
            if (res.confirm) {
             bookShelfRemove({fileName, openId: OPENID}).then(res=>{
                this.getBookIsShelf();
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
 
</style>