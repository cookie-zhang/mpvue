<template>
  <div>
    <web-view src='http://www.youbaobao.xyz/book/#/ebook/2016_Book_TransitionsInMathematicsEducat?opf=https%3A%2F%2Fbook.youbaobao.xyz%2Fepub2%2F2016_Book_TransitionsInMathematicsEducat%2FOEBPS%2Fcontent.opf' > </web-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      url:''
    }
  },
  mounted(){
    const { query } = this.$route

  }
}
</script>
<style lang="scss" scoped>

</style>