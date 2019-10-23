<template>
  <div class="tag_wraper">
    <div class="text" @>tag</div>
  </div>
</template>
<script>
export default {
  props:{
    text:''
  },
  methods:{
    onClick(){
      console.log('tag click.....')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>