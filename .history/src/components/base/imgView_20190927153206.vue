<template>
  <div class="img-view">
    <img
      :src='src'
      :lazy-oad='lazyLoad' 
    />
  </div>
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
    height:{
      type: String,
      default: 'auto'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>