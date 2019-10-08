<template>
  <div class="homeContainer">
    <SearchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    />
    <HomeCard />
    <HomeBanner 
      title='mpvue2.0实战多端小程序上线了'
      subTitle='立即体验'
      img='http://www.youbaobao.xyz/book/res/bg.jpg'
      @onClick='onBannerClick'
      />
  </div>
</template>

<script>
import SearchBar from '@/components/home/searchBar'
import HomeCard from '@/components/home/homeCard'
import HomeBanner from '@/components/home/homeBanner'
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
    HomeCard,
    HomeBanner
  }
}
</script>

<style lang="scss" scoped>

</style>