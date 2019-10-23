<template>
  <div class="search-list-wraper">
    <searchItem 
      title=''
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
    cate
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