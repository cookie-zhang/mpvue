<template>
  <div class="search_wraper">
   <TagGroup 
   :value='tags'
    headerText=''
    btnText=''
    @onTagClick='onTagClick'
    @onBtnClick='onBtnClick'/> 
  </div>
</template>
<script>
import TagGroup from '@/components/base/tagGroup'
export default {
  data(){
    return {
      tags:[
        'asdasdas','ggggggggggg','ddd','sss','aa'
      ]
    }
  },
  methods:{
    onBtnClick(){},
    onTagClick(text, index){
      console.log(text,index)
    },
  },
  components:{
    TagGroup
  }
  
}
</script>
<style lang="scss" scoped>

</style>