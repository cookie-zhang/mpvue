<template>
  <div>
    <SearchTable  
      :data='data'
      @onClick='onBookClick'
    />
  </div>
</template>
<script>
import SearchTable from '../../components/search/searchTab'
import { searchList } from '@/api/index'
import { setNavigationBarTitle } from '@/api/wechat'
export default {
  data(){
    return{
      data:[]
    }
  },
  methods:{
    onBookClick(book){
      this.$router.push({
        path: '/pages/detail/main',
        query:{
          fileName: book
        }
      })
    },
    getSearchList(){
      let { key, text } = this.$route.query
      let params = {}
      if(key && text){
        params[key] = text
      }
      searchList(params).then(res=>{
        this.data = res.data.data
      })
    }
  },
  mounted(){
    this.getSearchList()
    let { title } = this.$route.query
    setNavigationBarTitle(title)
  },
  components:{
    SearchTable
  }

};
</script>
<style lang="scss" scoped>
</style>