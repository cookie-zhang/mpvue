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
      default: '150px'
    }
  },
  data(){
    return {
      isLoading: true,
      error: false
    }
  },
  watch:{
    src(newValue, preValue){

    }
  },
  methods:{
    onClick(){
      this.$emit('onClick')
    },
    onLoad(){
      this.isLoading = false
      this.error = false
    },
    onError(){
      this.isLoading = true
      this.error = false
    },

  },
  mounted(){
    console.log(this.src)
  }
}
</script>
<style lang="scss" scoped>

</style>