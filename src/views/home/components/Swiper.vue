<template>
  <div class="wrapper">
    <!-- v-if="showSwiper"解决空数组渲染出的swiper -->
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl"  alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true, // 循环轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #e5e5e5
  .swiper-img
    width 100%
    height 31.25vw
</style>
