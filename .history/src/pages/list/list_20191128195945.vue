<template>
  <div>
    <SearchTable  

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
        
      }
      searchList(params).then(res=>{})
    }
  },
  components:{
    SearchTable
  }

};
</script>
<style lang="scss" scoped>
</style>