<template>
  <div class="search-list-wraper">
    <searchItem 
      :title='category'
      icon='apps-o'
      subTitle='Category'
      @onClick='showList(category, "category")'
      v-if='category'
    />
    <searchItem 
      :title='author'
      icon='user-o'
      subTitle='Author'
      @onClick='showList(author, "author")'
      v-if='author'
    />
    <searchItem 
      :title='publisher'
      icon='newspaper-o'
      subTitle='Publisher'
      @onClick='showList(publisher, "publisher")'
      v-if='publisher'
    />
    <searchTab 
      :data='data.book'
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
      this.$router.push({
        path:'/pages/list/main',
        query:{
          text,
          key
        }
      })
    },
    onBookClick(book){
      console.log(book)
    }
  },
  computed:{
    category(){
      if(this.data && this.data.category && this.data.category.length > 0){
        return this.data.category[0].categoryText
      }else{
        return null
      }
      
    },
    author(){
      if(this.data && this.data.author && this.data.author.length > 0){
        return this.data.author[0].author
      }else{
        return null
      }
     
    },
    publisher(){
      if(this.data && this.data.publisher && this.data.publisher.length > 0){
        return this.data.publisher[0].publisher
      }else{
        return null
      }
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