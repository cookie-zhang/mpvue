<template>
  <div class="homeContainer">
    <searchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    />
  </div>
</template>

<script>
import searchBar from '@/components/home/searchBar'
imp
export default {
  data () {
    return {}
  },
  methods: {
    onSearcharClick () {
      //跳转搜索页
    }
  },
  components: {
    searchBar
  }
}
</script>

<style lang="scss" scoped>
  .msg{
    color: red;
    font-size: 20px
  }
</style>