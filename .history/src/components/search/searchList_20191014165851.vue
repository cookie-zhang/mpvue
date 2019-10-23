<template>
  <div class="search-list-wraper">
    <searchItem />
    <searchItem />
    <searchItem />
  </div>
</template>
<script>
import searchItem from "./searchItem";
import searchTab from "./searchTab";
export default {
  props: {
    data: Array
  },
  data() {
    return {};
  },
  methods: {
    
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