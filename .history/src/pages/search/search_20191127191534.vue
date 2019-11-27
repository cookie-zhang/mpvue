<template>
  <div class="search_wraper">
    <SearchBar :focus='searchFocus' @onChange='onChang' @onClear='onClear' :hotSearch='hotSearchKeyword'/>
    <TagGroup 
      :value='hotSearchArray'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='showBookDetail'
      @onBtnClick='changeHotSearch'
      v-if="hotSearchArray > 0 && !showList"
    />
    <TagGroup 
      :value='historySearch'
      headerText='历史搜索'
      btnText='清空'
      @onTagClick='clearHistorySearch'
      @onBtnClick='searchKeyWord'
      v-if="historySearch > 0 && !showList"
    />
    <SearchList :data='searchList' v-if='showList'/> 
  </div>
</template>
<script>
import SearchBar from '@/components/home/searchBar'
import TagGroup from '@/components/base/tagGroup'
import SearchItem from '@/components/search/searchItem'
import SearchTab from '@/components/search/searchTab'
import SearchList from '@/components/search/searchList'
import { search, hotSearch } from '@/api/index'
import { getStorageSync } from '@/api/wechat'
export default {
  data(){
    return {
      hotSearch:[],
      hotSearchKeyword: '',
      history:[],
      searchList:{},
      searchFocus: true,
      openId:''
    }
  },
  computed:{
    showList(){
      const keys = Object.keys(this.searchList)
      return keys.length > 0
    },
    hotSearchArray(){
      const _hotSearch = []
      this.hotSearch.forEach(o=>_hotSearch.push(o.title))
      return _hotSearch
    }
  },
  methods:{
    onClear(){
      this.searchList={}
    },
    onChang(keyWord){
      if(!keyWord){
        return 
      }
      this.onSearch(keyWord)
    },
    onHotSearch(){
      hotSearch().then(res=>{
        console.log(res.data.data)
        this.hotSearch = res.data.data
      })
    },
    onSearch(keyWord){
      search({keyword:keyWord,openId:this.openId,pageSize:20,page:1}).then(res=>{
        console.log(res.data.data)
      this.searchList = res.data.data
      }).catch(error=>{
        
      })
    },
    changeHotSearch(){
      console.log('changeHotSearch...')
    },
    showBookDetail(text, index){
      console.log('showBookDetail')
    },
    clearHistorySearch(){
      console.log('clearHistorySearch')
    },
    searchKeyWord(){
      console.log('searchKeyWord')
    }
  },
  mounted(){
    this.openId = getStorageSync('openId')
    this.onHotSearch()
    this.hotSearchKeyword = this.$route.query.hotSearch
  },
  components:{
    TagGroup,
    SearchItem,
    SearchTab,
    SearchList,
    SearchBar
  }
  
}
</script>
<style lang="scss" scoped>

</style>