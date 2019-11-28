<template>
  <div>
    <DetailBook  :book='book'/>
    <DetailStat 
      :readers='book.readers'
      :readerNum= Number
      :rankNum=Number
      :rankAvg Number
    />
  </div>
</template>
<script>
import DetailBook from '../../components/detail/detailBook'
import DetailBottom from '../../components/detail/detailBottom'
import DetailContents from '../../components/detail/detailContents'
import DetailRate from '../../components/detail/detailRate'
import DetailStat from '../../components/detail/detailStat'
import { booDetail } from '../../api'
const OPENID = 'wx1a5c77f69e55e258'
export default {
  data(){
    return{
      book:{}
    }
  },
  mounted(){
    let { fileName } = this.$route.query
    booDetail({fileName:fileName,openId:OPENID}).then(res=>{
      this.book = res.data.data
    })
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