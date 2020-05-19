<template>
  <ul class="list">
    <!-- .prevent事件修饰符，可以取消触摸过程中浏览器自身的触摸效果 -->
    <li :ref="item" class="item" v-for="item of letters" :key="item" @click="handleLetterClick" @touchstart.prevent="handleTounchStart" @touchmove="handleTounchMove" @touchend="handleTounchEnd">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // Alphabet组件在父组件传入数据之后，会重新渲染页面，这个时候会执行这个钩子函数
  },
  props: {
    citys: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.citys){
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText)
    },
    handleTounchStart () {
      this.touchStatus = true
    },
    handleTounchMove (e) {
      if(this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        //函数节流操作
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change',this.letters[index])
          }
        },8)
      }
    },
    handleTounchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>