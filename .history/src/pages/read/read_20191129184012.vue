<template>
<div>
  <web-view src='http://www.youbaobao.xyz/book/#/ebook/2017_Book_SymbioticInteraction?opf=https%3A%2F%2Fbook.youbaobao.xyz%2Fepub2%2F2017_Book_SymbioticInteraction%2FOEBPS%2Fcontent.opf' > </web-view>
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
    let _url = 'http://www.youbaobao.xyz/book/#/ebook'
    if(query.flieName){
      _url = `${_url}/${query.fileName}`
      if(query.opf){
        _url = `${_url}?opf=${query.opf}`
      }
      if(query.navigation && query.opf){
        _url = `${_url}&navigation=${query.navigation}`
      }else if(query.navigation){
        _url = `${_url}?navigation=${query.navigation}`
      }
      this.url = _url;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>