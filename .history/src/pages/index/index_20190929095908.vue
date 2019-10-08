<template>
  <div class="homeContainer">
    <SearchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    />
    <ImgView src='https://www.youbaobao.xyz/mpvue-res/big.jpg' />
  </div>
</template>

<script>
import SearchBar from '@/components/home/searchBar'
import ImgView from '@/components/base/imgView'
export default {
  data () {
    return {
    }
  },
  methods: {
    onSearcharClick () {
      //跳转搜索页
    }
  },
  components: {
    searchBar,
    ImgView
  }
}
</script>

<style lang="scss" scoped>

</style>