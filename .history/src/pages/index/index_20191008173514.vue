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
      <HomeBook 
        title='为你推荐'
        :row='2'
        :col='2'
        :data='data' />
  </div>
</template>

<script>
import SearchBar from '@/components/home/searchBar'
import HomeCard from '@/components/home/homeCard'
import HomeBanner from '@/components/home/homeBanner'
import HomeBook from '@/components/home/homeBook'
export default {
  data () {
    return {
    }
  },
  methods: {
    onSearcharClick () {
      //跳转搜索页
    },
    onBannerClick(){
      console.log('banner click....')
    }
  },
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook
  }
}
</script>

<style lang="scss" scoped>

</style>