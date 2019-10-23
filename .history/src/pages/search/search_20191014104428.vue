<template>
  <div class="search_wraper" @click="onClick">
   <TagGroup /> 
  </div>
</template>
<script>
import TagGroup from '@/components/base/tagGroup'
export default {
  data(){
    return {
      tags:[
        '','ggggggggggg','ddd','sss','aa'
      ]
    }
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  },
  components:{
    TagGroup
  }
  
}
</script>
<style lang="scss" scoped>

</style>