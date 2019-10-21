import { resetRouter } from '@/router'

const state = {
    token: '',
    user : {},
    current : 0
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_MENU : (state, current) => {
    state.current = current
  }
}

const actions = {
    login({ commit }, userInfo) {
        commit('SET_USER', userInfo)
    },
    edit({commit}, userInfo) {
        commit('SET_USER', userInfo)
    },
    setCurrent({commit}, index) {
        commit('SET_MENU', index)
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

