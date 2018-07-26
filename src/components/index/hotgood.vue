<template>
    <div>
        <div class="weui-loadmore weui-loadmore_line">
            <div class="weui-loadmore__tips weui-loadmore__tips_in-line">热门推荐</div>
        </div>

        <!--  begin -->
        <div class="weui-grids">
        <a :href="item.url" class="weui-grid" v-for="item in newGood" :key="key">
          <div class="weui-grid-item">
            <div class="weui-grids-images"><img :src="item.img" :alt="item.name"></div>
            <div class="weui-grids-text" v-text="item.name"></div>
            <div class="weui-grids-price">￥ <span v-text="item.price"></span></div>
          </div>
        </a>
        </div>
        <!-- end -->
    </div>
</template>
<script>
export default {
  data () {
    return {
      newGood: [
        {
          name: 'aaaaa',
          url: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg',
          price: 30.0,
          img: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg'
        },
        {
          name: 'aaaaa',
          url: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg',
          price: 30.0,
          img: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg'
        },
        {
          name: 'aaaaa',
          url: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg',
          price: 30.0,
          img: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg'
        },
        {
          name: 'aaaaa',
          url: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg',
          price: 30.0,
          img: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg'
        },
        {
          name: 'aaaaa',
          url: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg',
          price: 30.0,
          img: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg'
        },
        {
          name: 'aaaaa',
          url: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg',
          price: 30.0,
          img: 'http://b2c.niuteam.cn/upload/goods/20180606/86aa78290cda8fdf59dca5694caa32283.jpg'
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
.weui-loadmore{
    height:5px;
}
.weui-panel{
  margin-top:0;
}
.weui-grids,.weui-grid{
  border:none;
  padding:0;
  background-color: #f4f4f4;
}
.weui-grid{
  padding:3px;
  text-align: center; 
}
.weui-grid-item{
  padding:5px 0;
  background-color: #fff;
  /* border:1px solid #cfcfcf; */
}
.weui-grids-images img{
  height:80px;
  width:80px;
  border-bottom:1px solid #cfcfcf;
}
.weui-grids-text{
  font-size:14px;
  text-align: center;
  color: #999;
}
.weui-grids-price{
  font-size:12px;
  text-align: center;
  color: red;
}
.weui-grid__label{
  margin-top:0;
  font-size:14px;
}

</style>