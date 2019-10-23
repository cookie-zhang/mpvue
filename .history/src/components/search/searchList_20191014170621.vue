<template>
  <div class="search-list-wraper">
    <searchItem />
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