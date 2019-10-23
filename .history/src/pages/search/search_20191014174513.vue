<template>
  <div class="search_wraper">
    <SearchBar />
    <TagGroup 
      :value='[]'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='showBookDetail'
      @onBtnClick='changeHotSearch'
    />
    <TagGroup 
      :value='[]'
      headerText='历史搜索'
      btnText='清空'
      @onTagClick='clearHistorySearch'
      @onBtnClick='searchKeyWord'
    />
    <!-- <SearchList :data='data'/>  -->
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
      item:[
        {icon:'apps-o',title:'Compute Science',subTitle:'Category'},
        {icon:'contact',title:'Compute Science',subTitle:'Author'},
        {icon:'newspaper-o',title:'Compute Science',subTitle:'Publisher'},
      ],
      tags:[
        'asdasdas','ggggggggggg','ddd','sss','aa'
      ],
      list:[{
			"id": 27,
			"fileName": "2018_Book_ApplyingTheKaizenInAfrica",
			"cover": "https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-91400-8_CoverFigure.jpg",
			"title": "Applying the Kaizen in Africa",
			"author": "Keijiro Otsuka",
			"publisher": "Springer International Publishing",
			"bookId": "2018_Book_ApplyingTheKaizenInAfrica",
			"category": 3,
			"categoryText": "Economics",
			"language": "en",
			"rootFile": "OEBPS/package.opf"
		}]
    }
  },
  computed:{
    data(){
      return {
        item: this.item,
        list: this.list
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