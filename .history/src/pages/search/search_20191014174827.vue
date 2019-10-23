<template>
  <div class="search_wraper">
    <SearchBar />
    <TagGroup 
      :value='hotSearch'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='showBookDetail'
      @onBtnClick='changeHotSearch'
      v-if="hotSearch > 0"
    />
    <TagGroup 
      :value='historySearch'
      headerText='历史搜索'
      btnText='清空'
      @onTagClick='clearHistorySearch'
      @onBtnClick='searchKeyWord'
      v-if="historySearch > 0"
    />
    <SearchList :data='searchList'/> 
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
      searchList:{}
    }
  },
  computed:{
    data(){
      return {
        item: this.item,
        list: this.list,
        searchList
      }
    }
  },
  methods:{
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