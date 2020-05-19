<template>
    <div class="header">
        <div class="header-left"><div class="iconfont backIcon">&#xe624;</div></div>
        <div class="header-input"><i class="iconfont">&#xe632;</i>输入城市/景点/游玩主题</div>
        <router-link to="/city">
          <div class="header-right">{{this.$store.state.city}}<i class="iconfont arrR">&#xe64a;</i></div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .backIcon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      padding-left .2rem
      background #fff
      border-radius .1rem
      color #ccc
      i
        margin-right .1rem
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrR
        font-size .24rem
        margin-left .1rem
</style>
