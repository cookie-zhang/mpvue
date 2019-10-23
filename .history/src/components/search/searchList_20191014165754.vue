<template>
  <div class="search-list-wraper">
    <searchItem />
    <searchItem />
    <searchItem />

  </div>
</template>
<script>
import searchItem from "./searchItem";
export default {
  props: {
    data: Array
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  },
  components: {
    searchItem
  }
};
</script>
<style lang="scss" scoped>
.search-list-wraper {
  
}
</style>