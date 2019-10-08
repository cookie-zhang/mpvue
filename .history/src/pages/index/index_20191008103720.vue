<template>
  <div class="homeContainer">
    <SearchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    />
    <HomeCard />
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
    SearchBar,
    ImgView,
    HomeCard
  }
}
</script>

<style lang="scss" scoped>

</style>