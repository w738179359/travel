<template>
  <div>
    <div class="item" v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-titile-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件，组件自身调用组件 -->
      <div class="item-children" v-if="item.children">
        <detial-list :categoryList="item.children"></detial-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetialList',
  props: {
    categoryList: Array
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-titile-icon
      display inline-block
      position relative
      left .06rem
      top .06rem
      width .36rem
      height .36rem
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .item-children
    padding 0 .2rem
</style>