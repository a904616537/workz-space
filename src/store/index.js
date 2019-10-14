import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import workzspace from './modules/workzspace'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    workzspace
  },
  getters
})

export default store
