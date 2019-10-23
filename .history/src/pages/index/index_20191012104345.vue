<template>
  <div class="homeContainer">
    <SearchBar 
    :disabled='false'
    @onClick="onSearcharClick"
    :hotSearch='hotSearch'
    />
    <HomeCard :data='homeCard'/>
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
        :data='data'
        mode='category'
        :btnText='text'
        @onMoreClick='onMoreClick'
        @onBookClick='onBookClick' />
  </div>
</template>

<script>
import SearchBar from '@/components/home/searchBar'
import HomeCard from '@/components/home/homeCard'
import HomeBanner from '@/components/home/homeBanner'
import HomeBook from '@/components/home/homeBook'
import { getHomeData } from '@/api/index'

export default {
  data () {
    return {
      text:'换一批',
      hotSearch:'',
      homeCard:{},
      shelf:[],
      banner:{},
      recommend:[],
      freeReaad:[],
      hotBook:[],
      cateGory:[]
    }
  },
  methods: {
    getHomeData(){
      getHomeData({openId:'1234'}).then((res)=>{
        const { 
          data:{
            hotSearch:{keyword},
            shelf,
            banner:{img,title,subTitle},
            recommend,
            freeReaad,
            hotBook,
            cateGory,
            shelfCount
          } 
        } = res.data
        this.hotSearch = keyword
        this.shelf = shelf
        this.banner = shbannerelf
        this.recommend = recommend
        this.freeReaad = freeReaad
        this.hotBook = hotBook
        this.cateGory = cateGory
        this.homeCard = {
          bookList: shelf,
          num:shelfCount,
          userInfo:{
            avatar:'https://www.youbaobao.xyz/mpvue-res/logo.jpg',
            nickname:'藤山长老'
          }
        }
      })
    },
    onMoreClick(){
      console.log('onMoreClick')
    },
    onBookClick(){
       console.log('onBookClick')
    },
    onSearcharClick () {
      //跳转搜索页
    },
    onBannerClick(){
      console.log('banner click....')
    }
  },
  mounted(){
    this.getHomeData()
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