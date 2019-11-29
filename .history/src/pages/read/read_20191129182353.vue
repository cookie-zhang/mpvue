<template>
<div>
    25555
  <web-view :src='url' > </web-view>

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
    let _url = 'http://test.youbaobao.xyz:18081/book/#/ebook'
    // if(query.flieName){
    //   console.log(1)
    //   _url = `${_url}/${query.fileName}`
    //   if(query.opf){
    //      console.log(2)
    //     _url = `${_url}?opf=${query.opf}`
    //   }
    //   if(query.navigation && query.opf){
    //      console.log(3)
    //     _url = `${_url}&navigation=${query.navigation}`
    //   }else if(query.navigation){
    //      console.log(4)
    //     _url = `${_url}?navigation=${query.navigation}`
    //   }
      this.url = _url;
       console.log(5)
    // }
     console.log(_url)
      console.log(query)
      console.log(this.url)
  }
}
</script>
<style lang="scss" scoped>

</style>