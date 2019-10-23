<template>
  <div class="tag_wraper">
    <div class="text">tag</div>
  </div>
</template>
<script>
export default {
  props:{
    text:''
  },
  methods:{
    onClick(){
      console.log('tag')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>