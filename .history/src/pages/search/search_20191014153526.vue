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
    subTitle=''
    icon='apps-'/>
  </div>
</template>
<script>
import TagGroup from '@/components/base/tagGroup'
import SearchItem from '@/components/search/searchItem'
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
    SearchItem
  }
  
}
</script>
<style lang="scss" scoped>

</style>