<template>
  <div class="search-list-wraper">
    <searchItem 
      :title='category.title'
      :icon='category.icon'
      :subTitle='category.subTitle'
      @onClick='showList(category.title, "category")'
    />
    <searchItem 
      :title='author.title'
      :icon='author.icon'
      :subTitle='author.subTitle'
      @onClick='showList(author.title, "author")'
    />
    <searchItem 
      :title='publisher.title'
      :icon='publisher.icon'
      :subTitle='publisher.subTitle'
      @onClick='showList(publisher.title, "publisher")'
    />
    <searchTab 
      :data='data.list'
      @onClick='onBookClick'
    />
  </div>
</template>
<script>
import searchItem from "./searchItem";
import searchTab from "./searchTab";
export default {
  props: {
    data: Object
  },
  data() {
    return {};
  },
  methods: {
    showList(text, key){
      console.log(text,key)
    },
    onBookClick(book){
      console.log(book)
    }
  },
  computed:{
    category(){
      if(this.data && this.data.category && this.data.category.length > 0){
        return this.data..category[0]
      }
      
    },
    author(){
      return this.data.item[1]
    },
    publisher(){
      return this.data.item[2]
    }
  },
  components: {
    searchItem,
    searchTab
  }
};
</script>
<style lang="scss" scoped>
.search-list-wraper {
  
}
</style>