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
        :col='3'
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
      data:[
            {
                "id":34,
                "fileName":"2018_Book_GeographiesOfTheUniversity",
                "cover":"https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg",
                "title":"Geographies of the University",
                "author":"Peter Meusburger",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_GeographiesOfTheUniversity",
                "category":7,
                "categoryText":"Geography",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":59,
                "fileName":"2018_Book_DrinkingInVictorianAndEdwardia",
                "cover":"https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg",
                "title":"Drinking in Victorian and Edwardian Britain",
                "author":"Thora Hands",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_DrinkingInVictorianAndEdwardia",
                "category":8,
                "categoryText":"History",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":60,
                "fileName":"2018_Book_HarnessingThePowerOfTheCrimina",
                "cover":"https://www.youbaobao.xyz/book/res/img/History/978-3-319-77908-9_CoverFigure.jpg",
                "title":"Harnessing the Power of the Criminal Corpse",
                "author":"Sarah Tarlow",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_HarnessingThePowerOfTheCrimina",
                "category":8,
                "categoryText":"History",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            },
            {
                "id":75,
                "fileName":"2018_Book_TheEuropeanBloodAndMarrowTrans",
                "cover":"https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-50026-3_CoverFigure.jpg",
                "title":"The European Blood and Marrow Transplantation Textbook for Nurses",
                "author":"Michelle Kenyon",
                "publisher":"Springer International Publishing",
                "bookId":"2018_Book_TheEuropeanBloodAndMarrowTrans",
                "category":17,
                "categoryText":"MedicineAndPublicHealth",
                "language":"en",
                "rootFile":"OEBPS/package.opf"
            }
        ]
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