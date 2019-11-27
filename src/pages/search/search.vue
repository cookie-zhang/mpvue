<template>
  <div class="search_wraper">
    <SearchBar 
      :hotSearch='hotSearchKeyword' 
      :focus='searchFocus' 
      @onChange='onChang' 
      @onClear='onClear' 
      @onConfirm='onConfirm'
      ref="searchBar"
    />
    <TagGroup 
      :value='hotSearchArray'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='showBookDetail'
      @onBtnClick='changeHotSearch'
      v-if="hotSearchArray.length > 0 && !showList"
    />
    
    <TagGroup 
      :value='historySearch'
      headerText='历史搜索'
      btnText='清空'
      @onTagClick='searchKeyWord'
      @onBtnClick='clearHistorySearch'
    />
    <!-- v-if="historySearch.length > 0 && !showList" -->
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
import { getStorageSync, setStorageSync, showToast } from '@/api/wechat'
const OPENID = 'wx1a5c77f69e55e258'
export default {
  data(){
    return {
      hotSearch:[],
      hotSearchKeyword: '',
      history:[],
      historySearch:[],
      searchList:{},
      searchFocus: true,
      openId:OPENID,
      page:1,
      pageSize:0
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
    onConfirm(keyWord){
      console.log(keyWord)
      //判断有没有所有关键词  没有就获取热门搜索发请求   有酒用关键词搜索
      if(!keyWord || keyWord.trim().length === 0){
        keyWord = this.hotSearchKeyword
        this.$refs.searchBar.setValue(keyWord)
      }else{

      }
      this.onSearch(keyWord)
      //2搜索结果写入历史搜索  未实现
      if(!historySearch.includes(keyWord)){
        this.historySearch.push(keyWord)
        setStorageSync('historySearch',this.historySearch)
      }
      //3搜索框失去焦点
      this.searchFocus = false
    },
    onClear(){
      this.searchList={}
    },
    onChang(keyWord){
      //  || keyWord.trim().length === 0
      if(!keyWord){
        return 
      }
      this.page = 1
      this.onSearch(keyWord)
    },
    onHotSearch(){
      hotSearch().then(res=>{
        this.hotSearch = res.data.data
      })
    },
    onSearch(keyWord){
      search({keyword:keyWord,openId:this.openId,page:this.page}).then(res=>{
      this.searchList = res.data.data
      }).catch(error=>{
        
      })
    },
    changeHotSearch(){
      hotSearch().then(res=>{
        this.hotSearch = res.data.data
      })
    },
    showBookDetail(text, index){
      console.log('showBookDetail')
    },
    clearHistorySearch(){
      console.log(1)
      this.historySearch = []
      setStorageSync('historySearch',[])
    },
    //点击历史搜索的子项开始搜索
    searchKeyWord(text){
      this.$refs.searchBar.setValue(text)
      this.onSearch(text)
    }
  },
  mounted(){
    this.openId = getStorageSync('openId')
    this.onHotSearch()
    this.page = 1
    this.hotSearchKeyword = this.$route.query.hotSearch
    this.historySearch = getStorageSync('historySearch') || []
  },
  onPageScroll(){
    if(this.searchFocus){
      this.searchFocus = false
    }
  },
  onReachBottom(){
    if(this.showList){
      this.page++
      const searchWord = this.$refs.searchBar.getValue()
      search({
        keyword:searchWord,
        openId:OPENID,
        page:this.page
      }).then(res=>{
        const { book } = res.data.data
        if(book && book.length){
          this.searchList.book.push(...book)
        }else{
          showToast('我也是有底线的！')
        }
      })
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