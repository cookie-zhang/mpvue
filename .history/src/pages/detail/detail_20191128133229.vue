<template>
  <div>
    <DetailBook  :book='book'/>
  </div>
</template>
<script>
import DetailBook from '../../components/detail/detailBook'
import DetailBook from '../../components/detail/detailBottom'
import DetailBook from '../../components/detail/detailContents'
import DetailBook from '../../components/detail/detailRate'
import detailStat from '../../components/detail/detailStat'
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
    DetailBook
  }
}

</script>

<style lang="scss" scoped>
 
</style>