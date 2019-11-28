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
import { bookDetail, bookRankSave, bookContents, bookIsShelf } from '../../api'
const OPENID = 'wx1a5c77f69e55e258'
export default {
  data(){
    return{
      book:{},
      contents:[]
    }
  },
  methods:{
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
          console.log(res.data.data)
          this.contents = res.data.data
        })
      }
    },
    getBookIsShelf(){
       let { fileName } = this.$route.query
      if(fileName){
        bookIsShelf({fileName,openId:OPENID}).then(res=>{

        })
      }
    },
    readBook(href){
      console.log(href)
    }
  },
  
  mounted(){
    this.getBookDetail();
    this.getBookContents()
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