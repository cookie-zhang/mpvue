<template>
  <div class="tag-group-wraper">
    <div class="tag-group-header">
      <div class="header-text">{{headerText}}</div>
      <div class="header-btn" @click="onBtnClick">{{btnText}}</div>  
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text,index) in value" :key="index">
        <Tag :text='text' @onClick="onTagClick(text, index)"/>
      </div>  
    </div> 
  </div>   
</template>
<script>
import Tag from './tag'
export default {
  props:{
    value:{
      type: Array,
      default:''
    },
    btnText:{
      type: String,
      default:''
    },
    headerText:{
      type: String,
      default:''
    }
  },
  methods:{
    onTagClick(text,index){
      this.$emit('onTagClick', text, index)
    },
    onBtnClick(){
      this.$emit('onBtnClick')
    }
  },
  components:{
    Tag
  }
}
</script>
<style lang="scss" scoped>
  .tag-group-wraper{
    margin-top: 35px;
    .tag-group-header{
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
       font-size: 14px;
        line-height: 20px;
      .header-text{
        color:#333;
      }
      .header-btn{
        color:#3696EF;
      }
    }
    .tag-group{
      display: flex;
      flex-flow: row wrap;
      padding: 4px 10px 0 10px;
      .tag-group-inner{
        padding: 12px 6px 0 6px;
      }
    }
  }
</style>