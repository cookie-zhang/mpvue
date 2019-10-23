<template>
  <div class="tag_wraper">
    <div class="tag" @click="onClick">{{text}}</div>
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
      console.log('tag...')
      this.$emit('onClick')
    }
  }
}
</script>
<style lang="scss" scoped>
  .tag_wraper{
    background: #ffff;
    border-radius: ;
    .tag{
      
    }
  }
</style>