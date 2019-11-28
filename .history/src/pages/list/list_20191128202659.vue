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
import { setNavigationBarTitle, showToast } from '@/api/wechat'
export default {
  data(){
    return{
      data:[],
      page:1
    }
  },
  methods:{
    getSearchList(){
      let { key, text } = this.$route.query
      let params = {page:this.page}
      if(key && text){
        params[key] = text
      }
      params[page] = this.page
      searchList(params).then(res=>{
        let { data } = res.data
        if(data.length>0){
          this.data.push(...data)
        }else{
          showToast('我是有底线的！')
        }
        
      })
    }
  },
  onReachBottom(){
   this.page++
   this.getSearchList()
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