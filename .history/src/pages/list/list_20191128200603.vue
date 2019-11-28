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
  },
  components:{
    SearchTable
  }

};
</script>
<style lang="scss" scoped>
</style>