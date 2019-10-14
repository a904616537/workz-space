import { resetRouter } from '@/router'

const state = {
    token: '',
    user : {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
}

const actions = {
    login({ commit }, userInfo) {
        commit('SET_USER', userInfo)
    },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

