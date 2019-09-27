<template>
  <div class="homeContainer">
    <searchBar :disabled=''/>
  </div>
</template>

<script>
import searchBar from '@/components/home/searchBar'
export default {
  data () {
    return {}
  },
  methods: {
    handleClick () {}
  },
  components: {
    searchBar
  }
}
</script>

<style lang="scss" scoped>
  .msg{
    color: red;
    font-size: 20px
  }
</style>