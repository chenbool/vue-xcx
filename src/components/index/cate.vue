<template>
    <div class="page__bd page__bd_spacing animated fadeIn">
        <div class="weui-flex">
            <div class="weui-flex__item" v-for="(item,index) in category" :key="key">
                <div class="placeholder">
                    <img :src="item.icon" alt="" class="icon">
                    <span v-text="item.name" class="text"></span>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
  data () {
    return {
      category: [
        {
          name: '分类1',
          url: 'cate',
          icon: '../../static/images/app.png'
        },
        {
          name: '分类1',
          url: 'cate',
          icon: '../../static/images/app.png'
        },
        {
          name: '分类1',
          url: 'cate',
          icon: '../../static/images/app.png'
        },
        {
          name: '分类1',
          url: 'cate',
          icon: '../../static/images/app.png'
        }
      ]
    }
  },
  created () {
    // console.log(this.$store.state)
  }

}
</script>

<style>
.weui-flex__item .placeholder {
  padding: 10px 20px;
  text-align: center;
  background-color: #f4f4f4;
  height: 2.6em;
  line-height: 2.6em;
}
.weui-flex{
    text-align: center;
}
.weui-flex__item .icon{
    display: block;
    width:32px;
    height:32px;
}
.weui-flex__item .placeholder .text{
    font-size: 12px;
    display: block;
    height:32px;
    width:32px;
    line-height:32px;
    color: #333;
}
</style>