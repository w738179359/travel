<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, idx) of pages" :key="idx">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
  .icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      height 0
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        img
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        bottom 0
        left 0
        right 0
        height .44rem
        line-height .44rem
        color $darkTextColor
        text-align center
        ellipsis()
</style>
