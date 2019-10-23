<template>
  <div>
    <div class="homeContainer">
      <SearchBar 
      :disabled='false'
      @onClick="onSearcharClick"
      :hotSearch='hotSearch'
      />
      <HomeCard 
      :data='homeCard'
      @onBookClick='onBookClick'/>
      <HomeBanner 
        :title='banner.title'
        :subTitle='banner.subTitle'
        :img='banner.img'
        @onClick='onBannerClick'
        />
          <HomeBook 
            title='为你推荐'
            :row='1'
            :col='3'
            :data='recommend'
            mode='col'
            :btnText='text'
            @onMoreClick='recommendChange("recommend")'
            @onBookClick='onBookClick' />
          <HomeBook 
            title='免费阅读'
            :row='2'
            :col='2'
            :data='freeRead'
            mode='row'
            :btnText='text'
            @onMoreClick='recommendChange("freeRead")'
            @onBookClick='onBookClick' />
          <HomeBook 
            title='当前最热'
            :row='1'
            :col='4'
            :data='hotBook'
            mode='col'
            :btnText='text'
            @onMoreClick='recommendChange("hotBook")'
            @onBookClick='onBookClick' />
          <HomeBook 
            title='分类'
            :row='3'
            :col='3'
            :data='category'
            mode='category'
            :btnText='text'
            @onMoreClick='onCategoryMoreClick'
            @onBookClick='onBookClick' />
    </div>
    <Auth />
  </div>
  
</template>

<script>
import SearchBar from '@/components/home/searchBar'
import HomeCard from '@/components/home/homeCard'
import HomeBanner from '@/components/home/homeBanner'
import HomeBook from '@/components/home/homeBook'
import Auth from '@/components/base/Auth'
import { getHomeData, getRecommend, getFreeRead, getHotBook } from '@/api/index'
import { getSetting } from '@/api/wechat'

export default {
  data () {
    return {
      text:'换一批',
      hotSearch:'',
      homeCard:{},
      shelf:[],
      banner:{},
      recommend:[],
      freeRead:[],
      hotBook:[],
      category:[],
      isAuth: true
    }
  },
  methods: {
    recommendChange(key){
      switch(key){
        case 'recommend':
          this.getRecommend()
          break
        case 'freeRead':
          this.getFreeRead()
          break
        case 'hotBook':
          this.getHotBook()
          break
      }
    },
    //获取首页数据
    getHomeData(){
      getHomeData({openId:'1234'}).then((res)=>{
        const { 
          data:{
            hotSearch:{keyword},
            shelf,
            banner,
            recommend,
            freeRead,
            hotBook,
            category,
            shelfCount
          } 
        } = res.data
        this.hotSearch = keyword
        this.shelf = shelf
        this.banner = banner
        this.recommend = recommend
        this.freeRead = freeRead
        this.hotBook = hotBook
        this.category = category
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
    //换一批获取recommed数据
    getRecommend(){
      getRecommend().then(res=>{
        this.recommend = res.data.data
      })
    },
    //换一批获取freedRead数据
    getFreeRead(){
      getFreeRead().then(res=>{
        console.log(res.data.data)
        this.freeRead = res.data.data
      })
    },
    //换一批获取hotBook数据
    getHotBook(){
      getHotBook().then(res=>{
        this.hotBook = res.data.data
      })
    },
    onCategoryMoreClick(){
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
    },
    //授权
    getSetting(onSuccess, onFail){
      getSetting(
        'userInfo',
        ()=>{
          console.log('成功')
        },
        ()=>{
          console.log('失败')
        })
    }
  },
  mounted(){
    //this.getHomeData()
    //授权
    this.getSetting();
  },
  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  }
}
</script>

<style lang="scss" scoped>

</style>