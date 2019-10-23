<template>
  <div class="search_wraper" @click="onClick">
   <Tag text/>
  </div>
</template>
<script>
import Tag from '@components/base/tag'
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