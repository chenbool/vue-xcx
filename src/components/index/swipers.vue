<template>
  <div class="page__hd">
    <!--  begin -->
      <swiper class="swiper animated slideInDown" :indicator-dots="swiperData.indicatorDots" :autoplay="swiperData.autoplay" 
      :interval="swiperData.interval" :duration="swiperData.duration" :style="{height:height+'px'}">
      
        <block v-for="(item, index ) in swiperData.imgUrls" :key="key">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
    <!-- end -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperData: {}
    }
  },
  created () {
    // console.log(this.$store.state)
    this.swiperData = this.$store.state.swiper
  }
}
</script>

<style>
/* 轮播样式 */
.swiper{
  /* border: 1px solid red; */
  width:100%;
  /* height:200px; */
}
.swiper .slide-image{
  width:100%;
  height:200px;
}
</style>