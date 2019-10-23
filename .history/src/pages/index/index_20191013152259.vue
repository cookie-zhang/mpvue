<template>
  <div>
    <div class="homeContainer" v-if='isAuth'>
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
            :col='2'
            :data='category'
            mode='category'
            :btnText='text'
            @onMoreClick='onCategoryMoreClick'
            @onBookClick='onBookClick' />
    </div>
    <Auth v-if='!isAuth' @getUserInfo='init'/>
  </div>
  
</template>

<script>
import SearchBar from '@/components/home/searchBar'
import HomeCard from '@/components/home/homeCard'
import HomeBanner from '@/components/home/homeBanner'
import HomeBook from '@/components/home/homeBook'
import Auth from '@/components/base/Auth'
import { getHomeData, getRecommend, getFreeRead, getHotBook, register} from '@/api/index'
import { getSetting, getUserInfo, setStorageSync, getStorageSync, getUserOpenId, showLoading } from '@/api/wechat'

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
     //获取首页数据
    getHomeData(openId,userInfo){
      getHomeData({openId}).then((res)=>{
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
          userInfo
        }
        hideLoading()
      }).catch(()=>{
        hideLoading()
      })
    },
    //授权登陆
    getUserInfo(e){
      const onOpenIdComplete = (openId, userInfo) =>{
        this.getHomeData(openId,userInfo)
        register(openId, userInfo)
      }
      getUserInfo(
        (userInfo) => {
          console.log(userInfo)
          setStorageSync('userInfo',userInfo)
          const openId = getStorageSync('openId')
          if(!openId || openId.length === 0){
            getUserOpenId(openId => onOpenIdComplete(openId, userInfo))
          }else{
            onOpenIdComplete(openId, userInfo)
          }
        },
        () => {
          console.log('获取用户信息失败')
        }
      )
    },
    //授权 先授权，是否具有权限
    getSetting(onSuccess, onFail){
      getSetting(
        'userInfo',
        ()=>{
          this.isAuth = true;
          this.getUserInfo()
          this.getHomeData()
          console.log('获取授权成功')
        },
        ()=>{
          this.isAuth = false;
          console.log('获取授权失败')
        })
    },
    init(){
      this.getSetting()
    },
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
    
  },
  mounted(){
    this.init();
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