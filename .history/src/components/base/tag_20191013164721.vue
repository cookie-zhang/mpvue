<template>
  <div class="tag_wraper">
    <div class="text" @click="onClick">{{text}}</div>
  </div>
</template>
<script>
export default {
  props:{
    text:''
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>