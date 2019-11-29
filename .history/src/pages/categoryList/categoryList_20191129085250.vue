<template>
  <div>
   <HomeBook 
      title='分类'
      :row='3'
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
  methods:{}，
  components: {
    HomeBook
  }
}

</script>
<style lang="scss" scoped>

</style>