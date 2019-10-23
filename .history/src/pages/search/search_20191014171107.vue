<template>
  <div class="search_wraper">
    <TagGroup 
      :value='tags'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='onTagClick'
      @onBtnClick='onBtnClick'
    />
    <SearchList :data='list'/> 
  </div>
</template>
<script>
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
        {icon:'apps-o',title:'Compute Science',subTitle:'Category'},
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
  methods:{
    onBtnClick(){
      console.log('btn...')
    },
    onTagClick(text, index){
      console.log(text,index)
    },
  },
  components:{
    TagGroup,
    SearchItem,
    SearchTab,
    SearchList
  }
  
}
</script>
<style lang="scss" scoped>

</style>