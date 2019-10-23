<template>
  <div class="tag-group-wraper">
    <div class="tag-group-header">
      <div class="header-text">{{headerText}}</div>
      <div class="header-btn" @click="onBtnClick">{{btnText}}</div>  
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text,index) in value" :key="index">
        <Tag :text='text'/>
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