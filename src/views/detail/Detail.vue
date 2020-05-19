<template>
  <div>
    <detail-banner :detailInfo="detailInfo"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="detailInfo.categoryList">
        
      </detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return { 
      detailInfo: {}
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetail() {
      // axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.getDetailSucc)
      axios.get('/api/detail.json' , {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailSucc)
    },
    getDetailSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        this.detailInfo = res.data
      }
    }
  },
  mounted() {
    this.getDetail()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>