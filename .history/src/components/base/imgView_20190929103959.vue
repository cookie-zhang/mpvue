<template>
  <div class="img-view" @click="onClick">
    <img
      :src='src'
      :class="round ? 'round image' : 'image'"
      :lazy-load='lazyLoad' 
      :style="{ height }"
      
      @load="onLoad"
      @error="onError"
    />
     <img
      src='https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg'
      :class="round ? 'round image' : 'image'"
      :lazy-load='lazyLoad' 
      :style="{ height }"
      @load="onLoad"
      @error="onError"
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
      this.error = true
      console.log(1)
    },
    onError(){
      this.isLoading = true
      this.error = false
      console.log(2)
    },

  },
  mounted(){
    console.log(this.src)
  }
}
</script>
<style lang="scss" scoped>

</style>