<template>
  <div class="page">

    <div class="page__bd">
      <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">搜索</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
    </div>

    <!--  -->
    <div class="page__bd page__bd_spacing">
      <div class="weui-flex__item">
        <div class="placeholder">weui</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">weui</div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      inputShowed: false,
      inputVal: ''
    }
  },
  methods: {
    showInput () {
      this.inputShowed = true
    },
    hideInput () {
      this.inputVal = ''
      this.inputShowed = false
    },
    clearInput () {
      this.inputVal = ''
    },
    inputTyping (e) {
      console.log(e)
      this.inputVal = e.mp.detail.value
    }
  }
}
</script>

<style scoped>
.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}
.searchbar-result:before {
  display: none;
}
.weui-cell {
  padding: 12px 15px 12px 35px;
}

.page__bd_spacing .left{
  flex:1;
  width: 50px;
  height:100%;
  position: fixed;
  left:0;
  top:40px;
}
</style>
