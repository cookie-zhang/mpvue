<template>
  <div>
   
  </div>
</template>
<script>

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