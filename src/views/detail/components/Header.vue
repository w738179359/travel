<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/" tag="div">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    // header-fixed 随着滚动渐显的效果
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      if (top > 60) {
        this.showAbs = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  // 如果页面设置了缓存 会存在 activated 和 deactivated 两个钩子函数，当前页面不存在缓存，所以 更改为 mounted 和 destroyed 钩子函数
  mounted() {
    // 该事件绑定会影响到全局组件
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed () {
    // 组件被隐藏的时候销毁 该事件
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    z-index 2
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    .header-fixed-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff
</style>