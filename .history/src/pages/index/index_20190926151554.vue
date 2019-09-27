<template>
  <div>
    <span class="msg">来了 老弟</span>
    <van-button type="primary" @click="handleClick">按钮</van-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      console.log(1)
      this.$router.push('/pages/categoryList/main')
    }
  }
}
</script>

<style lang="scss" scoped>
  .msg{
    color: red;
    font-size: 20px
  }
</style>