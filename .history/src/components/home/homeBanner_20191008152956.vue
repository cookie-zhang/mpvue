<template>
  <div class="home-banner">
    <div>
  </div>
</template>

<script>
export default {
  props:{
    img:String,
    title:String,
    subTitle:String
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