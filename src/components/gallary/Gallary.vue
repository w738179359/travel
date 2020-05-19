<template>
  <div class="container" @click="handleGallary">
    <div class="wrapper">
      <!-- v-if="showSwiper" -->
        <swiper :options="swiperOptions" >
          <swiper-slide v-for="(item, idx) of detailImgInfo" :key="idx">
            <img class="gallary-img" :src="item"  alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    detailImgInfo: Array
  },
  methods: {
    handleGallary() {
      this.$emit('change',false)
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents:true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    z-index 99
    .wrapper
      padding-bottom 100%
      height 0
      width 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>