<template>
  <div>
    <DetailBook />
  </div>
</template>
<script>
import DetailBook from '../../components/detail/detailBook'
import { booDetail } from '../../api'
const OPENID = 'wx1a5c77f69e55e258'
export default {
  mounted(){
    let { fileName } = this.$route.query
    booDetail({fileName:fileName,openId:OPENID}).then(res=>{
    
    })
  },
  components:{
    DetailBook
  }
}

</script>

<style lang="scss" scoped>
 
</style>