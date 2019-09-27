<template>
  <div></div>
</template>
<script>
export default {
  props:{
    src:{
      type: String,
      default: ''
    },
    mode:{
      type: String,
      default: 'widthFix'
    },
    lazyLoad:{
      type: Boolean,
      default: true
    },
    round:{
      type: Boolean,
      default: false
    },
    hei
  }
}
</script>
<style lang="scss" scoped>

</style>