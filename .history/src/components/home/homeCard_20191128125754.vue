<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wraper">
          <ImageView :src='avatar' round height='20px' />
        </div>
        <div class="nickname">{{nickname}}</div>
        <div class="shelf-text">书架共有{{data.num}}本好书</div>
        <div class="round-item">|</div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wraper">
          <div 
          class="book-img-wraper" 
          v-for="item in bookList" 
          :key="item.id"  
          @click="onBookClick(item)"
          >
            <ImageView  :src='item.cover' height='101px' />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name='arrow' size='11px' color='#828489'></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedBackClick">反馈</div>
    </div>
    <van-dialog id='van-dialog' />
  </div>
</template>

<script>
import ImageView from '../base/imgView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {
  props:{
    data: Object,
    hasSigin:{
      type:Boolean,
      default: false
    },
    signDay:{
      type: Number,
      default: 0
    }
  },
  computed:{
    avatar(){
      return (this.data && this.data.userInfo && this.data.userInfo.avatarUrl) || ''
    },
    nickname(){
      return (this.data && this.data.userInfo && this.data.userInfo.nickName) || ''
    },
    bookList(){
      return (this.data && this.data.bookList) || []
    }
  },
  methods:{
    gotoShelf(){},
    onBookClick(){
      console.log(1)
      this.$emit('onClick')
    },
    sign(){},
    onFeedBackClick(){
      Dialog.confirm({
        title:'反馈',
        message:'您是不是确认提交反馈信息？',
        confirmButtonText:'是',
        cancelButtonText:'否'
      }).then(()=>{
        console.log('点击是之后的事件')
      }).catch(()=>{
        console.log('点击否之后的事件')
      })
    }
  },
  components:{
    ImageView
  }
}
</script>

<style lang="scss" scoped>
  .home-card{
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
    margin: 22px 20px 0px;
    .home-card-inner{
      position: relative;
      padding: 21.5px 17px 20px 20px;
      box-sizing: border-box;
      .user-info{
        display: flex;
        align-items: center;
        .avatar-wraper{
          width: 20px;
          height: 20px;;
        }
        .nickname,.shelf-text{
          margin-left: 8.5px;
          color: #fff;
          font-size: 12px;
        }
        .shelf-text{
          opacity: 0.7;
        }
        .round-item{
          color: #a2a2a2!important;
          margin: 0px 8px;
        }
      }
      .book-info{
        display: flex;
        margin-top: 16.5px;
        .book-wraper{
          flex: 1;
          display: flex;
          justify-content: space-around;
         .book-img-wraper{
           width: 77px;
           height: 101px;
         }
        }
        .shelf-wrapper{
        
          display: flex;
          align-items: center;
          .shelf{
            font-size: 11px;
            word-break: break-all;
            color: #fff;
            opacity: .8;
            font-size: 11px;
          }
        }
      }
      .feedback-wrapper{
        position: absolute;
        top: 20px;
        right: 0px;
        width: 44.5px;
        height: 23.5px;
        background: #707070;
        border-radius: 100px 0 0 100px;
        //opacity: .3;
        color: #fff;
        text-align: center;
        font-size: 11px;
        line-height: 23.5px;
      }
    }
  }
</style>