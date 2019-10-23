<template>
  <div class="img-view" @click="onClick">
    <img
      :src='src'
      :class="round ? 'round image' : 'image'"
      :lazy-load='lazyLoad' 
      :style="{ height }"
      :mode:='mode'
      @load="onLoad"
      @error="onError"
      v-show="!isLoading && !error"
    />
    <img
      src='https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg'
      :class="round ? 'round image' : 'image'"
      :lazy-load='lazyLoad' 
      :style="{ height }"
      :mode:='mode'
      v-show="isLoading || error"
    />
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>