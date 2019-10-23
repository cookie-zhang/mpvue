<template>
  <div class="search-list-wraper">
    <searchItem 
      :title='category.title'
      :icon='category.icon'
      :subTi
    />
    <searchItem />
    <searchItem />
    <searchTab />
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
    showList(){}
  },
  computed:{
    category(){
      return this.data.item[0]
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