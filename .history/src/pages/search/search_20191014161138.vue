<template>
  <div class="search_wraper">
    <TagGroup 
      :value='tags'
      headerText='热门搜索'
      btnText='换一批'
      @onTagClick='onTagClick'
      @onBtnClick='onBtnClick'/>

    <SearchItem 
      title='计算机科学'
      subTitle='类别'
      icon='apps-o' />
       
  </div>
</template>
<script>
import TagGroup from '@/components/base/tagGroup'
import SearchItem from '@/components/search/searchItem'
import SearchTab from '@/components/search/searchTab'
export default {
  data(){
    return {
      tags:[
        'asdasdas','ggggggggggg','ddd','sss','aa'
      ]
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
    SearchTab
  }
  
}
</script>
<style lang="scss" scoped>

</style>