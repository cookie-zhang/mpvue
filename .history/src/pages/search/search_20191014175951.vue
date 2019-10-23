<template>
  <div class="search_wraper">
    <SearchBar :focus='searchFocus' @onChange='onChang'/>
    <TagGroup 
      :value='hotSearch'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='showBookDetail'
      @onBtnClick='changeHotSearch'
      v-if="hotSearch > 0 && !showList"
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
export default {
  data(){
    return {
      hotSearch:[],
      history:[],
      searchList:{},
      searchFocus: true
    }
  },
  computed:{
    showList(){
      const keys = Object.keys(this.searchList)
      return keys.length > 0
    }
  },
  methods:{
    onChang(keyWord){
      if(!keyWord || keyWord.trim().length === 0){
        return 
      }
      this.onSearch(keyWord)
    },
    onSearch(){
      onSearch
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