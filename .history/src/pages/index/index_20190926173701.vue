<template>
  <div>
    <span class="msg">来了 老弟</span>
    <van-button type="primary" @click="handleClick">按钮</van-button>
  </div>
</template>

<script>
import { get } from '@/util/re'
export default {
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/pages/index/main')
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