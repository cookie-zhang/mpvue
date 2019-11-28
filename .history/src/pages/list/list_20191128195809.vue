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
    getsearchList
  },
  components:{
    SearchTable
  }

};
</script>
<style lang="scss" scoped>
</style>