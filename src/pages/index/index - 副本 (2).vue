<template>
  <div class="page">

    <div class="page__hd">
      <!-- 轮播 begin -->
      <swipers></swipers>
      <!-- end -->
    </div>

    <div class="weui-cells__title">带跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
    </div>   

<!--
    <div class="weui-loadmore">
      <div class="weui-loading"></div>
      <div class="weui-loadmore__tips">正在加载</div>
    </div>

    <div class="weui-loadmore weui-loadmore_line">
      <div class="weui-loadmore__tips weui-loadmore__tips_in-line">暂无数据</div>
    </div>
-->


    <!-- footer begin -->
    <foot></foot>
    <!-- end -->

  </div>
</template>

<script>
import foot from '@/components/foot'
import swipers from '@/components/swipers'
export default {
  data () {
    return {
    }
  },
  components: {
    foot,
    swipers
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
