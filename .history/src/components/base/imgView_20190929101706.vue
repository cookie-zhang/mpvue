<template>
  <div class="img-view" @>
    <img
      :src='src'
      :class="round ? 'round image' : 'image'"
      :lazy-load='lazyLoad' 
      :style="{ height }"
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

  },
  mounted(){
    console.log(this.src)
  }
}
</script>
<style lang="scss" scoped>

</style>