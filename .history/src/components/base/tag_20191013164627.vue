<template>
  <div class="tag_wraper">
    <div class="text" @click="onClick">tag</div>
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