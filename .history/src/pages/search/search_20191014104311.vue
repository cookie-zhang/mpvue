<template>
  <div class="search_wraper" @click="onClick">
   <Tag text='测试文本'/> 
  </div>
</template>
<script>
import tagGroup from '@/components/base/tagGroup'
export default {
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  },
  components:{
    Tag
  }
  
}
</script>
<style lang="scss" scoped>

</style>