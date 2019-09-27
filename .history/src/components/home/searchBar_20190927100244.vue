<template>
  <div>
   首页搜索框组件
  </div>
</template>

<script>
import { get, post } from '../../utils/request.js'
export default {
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      // this.$router.push('/pages/index/main')
      post('www.baidu.com').then(res => {
        console.log(res)
      })
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