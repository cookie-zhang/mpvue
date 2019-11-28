<template>
  <div>
   <HomeBook 
      title='分类'
      :row='3'
      :col='2'
      :data='category'
      mode='category'
      btnText='查看全部'
      @onMoreClick='onCategoryMoreClick'
      @onBookClick='onBookClick' />
  </div>
</template>
<script>
import HomeBook from '@/components/home/homeBook'
export default {
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