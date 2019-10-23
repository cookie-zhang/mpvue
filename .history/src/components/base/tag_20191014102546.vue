<template>
  <div class="tag_wraper" @click="onClick">
    <div class="tag">{{text}}</div>
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
    padding: 6px 17px;
    .tag{
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      color:#272E37;
    }
  }
</style>