<template>
  <div class="page">

    <!-- 轮播 begin -->
    <swipers></swipers>
    <!-- end -->   

    <!-- 分类 -->
    <cate></cate>

    <!-- 最新发布 -->
    <newgood></newgood>

    <!-- 热门推荐 -->
    <hotgood></hotgood>

    <!-- footer begin -->
    <foot></foot>
    <!-- end -->

  </div>
</template>

<script>
import foot from '@/components/foot'
import swipers from '@/components/index/swipers'
import newgood from '@/components/index/newgood'
import hotgood from '@/components/index/hotgood'
import cate from '@/components/index/cate'
export default {
  data () {
    return {
    }
  },
  components: {
    foot,
    swipers,
    newgood,
    hotgood,
    cate
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
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
