<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item, idx) of list" :key="idx" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CitySearch",
  props:{
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick(city) {
      //this.$store.dispatch('changeCity', city)  不通过actions
      this.$store.commit('mchangeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities){
          this.cities[i].forEach((value) => {
            if (value.spell.includes(this.keyword) || value.name.includes(this.keyword) ){
              result.push(value)
            }
          });
        }
        this.list = result
      },100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search,{
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      height .62rem
      line-height .62rem
      width 100%
      padding 0 .1rem
      box-sizing border-box
      text-align center
      border-radius .06rem
      color #666
  .search-content
    overflow hidden
    position absolute
    z-index 1
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eeeeee
    .search-item  
      padding-left .2rem
      line-height .62rem
      background #fff
      color #666
</style>