<template>
  <div>
    <SearchTable  
      :data='data'
    
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