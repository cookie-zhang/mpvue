<template>
  <div class="search_wraper" @click="onClick">
   search_wraper
  </div>
</template>
<script>
export default {
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
  
}
</script>
<style lang="scss" scoped>

</style>