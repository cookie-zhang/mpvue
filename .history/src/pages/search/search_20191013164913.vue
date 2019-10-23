<template>
  <div class="tag_wraper">
   
  </div>
</template>
<script>
export default {
  props:{
    text:{
      stype:String,
      default:''
    }
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