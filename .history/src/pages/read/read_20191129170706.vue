<template>
  <div>
   <HomeBook 
      :row='category.length/2'
      :col='2'
      :data='category'
      mode='category'
      :show-btn='false'
      :show-title='false'
      @onBookClick='onCategoryClick' 
    />
  </div>
</template>
<script>
import HomeBook from '@/components/home/homeBook'
import { categoryList } from '@/api/index'
export default {
  data(){
    return {
      category:[]
    }
  },
  methods:{
    //http://www.youbaobao.xyz/book/#/ebook/2016_Book_TransitionsInMathematicsEducat
    getCategoryList(){
      categoryList().then(res=>{
        this.category = res.data.data
      })
    },
     onCategoryClick(category){
     this.$router.push({
        path:'/pages/list/main',
        query:{
          key:'categoryId',
          text:category.category,
          title:category.categoryText
        }
      })
    },
  },
  mounted(){
    this.getCategoryList();
  },
  components: {
    HomeBook
  }
}

</script>
<style lang="scss" scoped>

</style>