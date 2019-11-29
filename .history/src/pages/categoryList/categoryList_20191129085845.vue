<template>
  <div>
   <HomeBook 
      title='分类'
      :row='category.length/2'
      :col='2'
      :data='category'
      mode='category'
      :show-btn='false'
      :show-title='false'
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
    getCategoryList(){
      categoryList().then(res=>{
        this.category = res.data.data
      })
    }
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