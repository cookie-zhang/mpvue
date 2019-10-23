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
    display: flex;
    justify-content: center;
    background: #f7f7f9;
    border-radius: 16px;
    pa
    .tag{
      font-size: 14px;
      color:#272E37;
    }
  }
</style>