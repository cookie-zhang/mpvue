<template>
  <web-view :src='url' > </web-view>
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
      console.log()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>