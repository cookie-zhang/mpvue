<template>
  <div class="homeContainer">
    <searchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    />
    <imgView sr />
  </div>
</template>

<script>
import searchBar from '@/components/home/searchBar'
import imgView from '@/components/base/imgView'
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
    searchBar,
    imgView
  }
}
</script>

<style lang="scss" scoped>
  .msg{
    color: red;
    font-size: 20px
  }
</style>