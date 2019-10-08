<template>
  <div class="homeContainer">
    <searchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    />
    <imgView src='https://www.youbaobao.xyz/mpvue-res/big.jpg' />
  </div>
</template>

<script>
import searchBar from '@/components/home/searchBar'
import ImgView from '@/components/base/imgView'
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

</style>