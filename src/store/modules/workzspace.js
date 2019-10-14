/**
* FileType js
* Sample React Redux 
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2019-02-24 22:34:55
* @Description
* @Flow 
*/



import * as types  from '../mutation-types'

const state = {
	workzs : [],	// 仓库
}

const actions = {
	setWorkz({commit}, data) {
		commit(types.SET_WORK, data);
	}
}

// mutations
const mutations = {
	[types.SET_WORK] (state, data) {
		console.log('data??', data);
		state.workzs = data;
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}