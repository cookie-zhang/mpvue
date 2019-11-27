<template>
  <div class="search-bar">
    <div class="search-bar-wrapper" @click="onSearchBarClick">
      <van-icon class="search" name='search' size='16px' color='#858c86'></van-icon>
      <input class="search-bar-input" 
        :focus='focus' 
        :disabled='disabled' 
        :maxlength="limit"
        :placeholder="hotSearch.length == 0 ? '搜索' : hotSearch"
        v-model="searchWord"
        @change='onChange'
        confirm-type='search'
        @confirm='onConfirm'
        placeholder-style="color: #ADB4BB"
        />
       <van-icon 
          class="clear"
          name="clear"
          size='16px'
          color='#ccc'
          @click="onClearClick" 
          v-if='searchWord.length>0'
          ></van-icon>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    focus:{
      type: Boolean,
      default: false, //true: input自动聚焦，false:不聚焦，（真机才能看到效果）   
    },
    disabled:{
      type:Boolean,
      default: false
    },
    limit:{
      type: Number,
      default:20
    },
    hotSearch:{
      type: String,
      default:''
    },
    
  },
  watch:{
    searchWord(){
      this.onChange(this.searchWord)
    }
  },
  data () {
    return {
      searchWord:''
    }
  },
  methods:{
    onSearchBarClick(){
      this.$emit('onClick')
    },
    onClearClick(){
      this.searchWord=''
      this.$emit('onClear')
    },
    onChange(e){
      // e.mp.detail.value ||
      const  value  =  e
      this.$emit('onChange', value)
    },
    onConfirm(e){
      const value  = e
      this.$emit('onConfirm', value)
    },
    setValue(v){
      this.searchWord = v
    },
    getValue(v){
     return this.searchWord
    }

  }
}
</script>

<style lang="scss" scoped>
  .search-bar{
    padding: 15px 15.5px;
    .search-bar-wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 10px;
      background: #F5F7F9;
      border-radius: 20px;
      padding: 12px 17px;
      .search-bar-input{
        flex: 1;
        margin: 0 12px;
      }
      .search, .clear{
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>