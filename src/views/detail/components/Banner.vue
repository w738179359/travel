<template>
  <div>
    <div class="banner" @click="handleBanner">
      <img :src="detailInfo.bannerImg" class="banner-img" alt="">
      <div class="banner-info">
        <div class="banner-tittle">{{detailInfo.sightName}}</div>
        <div class="banner-number"><i class="banner-icon iconfont">&#xe67f;</i> 39</div>
      </div>
    </div>
    <fade-animate>
      <common-gallary :detailImgInfo="detailInfo.gallaryImgs" v-show="showGallary" @change="handleGallaryChange"></common-gallary>
    </fade-animate>
  </div>
</template>

<script>
import CommonGallary from '@/components/gallary/Gallary'
import FadeAnimate from '@/components/fade/FadeAnimate'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  components:{
    CommonGallary,
    FadeAnimate
  },
  methods: {
    handleBanner () {
      this.showGallary = true
    },
    handleGallaryChange (res) {
      this.showGallary = res
    }
  },
  props: {
    detailInfo: Object
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      display flex
      background-image linear-gradient(to top,  rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))
      .banner-tittle
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        font-size .24rem
        background rgba(0,0,0,.8)
        margin-top .14rem
        .banner-icon
          font-size .24rem
</style>