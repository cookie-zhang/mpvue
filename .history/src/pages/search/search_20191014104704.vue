<template>
  <div class="search_wraper" @click="onClick">
   <TagGroup 
   :value='tags'
    headerText='标题'
    btnText='热门搜索'
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
    onClick(){
      this.$emit('onClick')
    },
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