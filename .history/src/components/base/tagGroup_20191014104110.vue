<template>
  <div class="tag-group-wraper">
    <div class="tag-group-header">
      <div class="header-text"></div>
      <div class="header-btn" @click="onBtnClick"></div>  
    </div>
    <div class="tag-group">
      <div class="tag-group-inner">
        <Tag />
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
    onTagClick(text){

    },
    onBtnClick(){

    }
  },
  components:{
    Tag
  }
}
</script>