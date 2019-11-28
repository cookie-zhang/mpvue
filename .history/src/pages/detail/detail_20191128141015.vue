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
  </div>
</template>
<script>
import DetailBook from '../../components/detail/detailBook'
import DetailBottom from '../../components/detail/detailBottom'
import DetailContents from '../../components/detail/detailContents'
import DetailRate from '../../components/detail/detailRate'
import DetailStat from '../../components/detail/detailStat'
import { bookDetail, bookRankSave } from '../../api'
const OPENID = 'wx1a5c77f69e55e258'
export default {
  data(){
    return{
      book:{}
    }
  },
  methods:{
    onRateChange(value){
      bookRankSave
    }
  },
  getBookDetail(){
    let { fileName } = this.$route.query
    bookDetail({fileName:fileName,openId:OPENID}).then(res=>{
      this.book = res.data.data
    })
  },
  mounted(){
    this.getBookDetail();
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