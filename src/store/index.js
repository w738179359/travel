import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)



export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('mchangeCity', city)
  //   }
  // }, 不通过actions
  mutations
})