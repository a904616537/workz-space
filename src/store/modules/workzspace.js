/**
* FileType js
* Sample React Redux 
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2019-02-24 22:34:55
* @Description
* @Flow 
*/



import * as types  from '../mutation-types'
import {workspace, submitPraise, submitWishlist} from '../../api';

const state = {
	workzs : [],	// 仓库

}

const actions = {
	setWorkz({commit}, data) {
		commit(types.SET_WORK, data);
	},
	praise({commit}, data) {
		return new Promise((resolve, reject) => {
            submitPraise(data)
            .then(response => {
                commit(types.PRAISE, response);
                resolve()
            }).catch(error => {
                reject('提交出错')
            })
        })
	},
	wishlist({commit}, data) {
		return new Promise((resolve, reject) => {
            submitWishlist(data)
            .then(response => {
                commit(types.PRAISE, response);
                resolve()
            }).catch(error => {
                reject('提交出错')
            })
        })
	}
}

// mutations
const mutations = {
	[types.SET_WORK] (state, data) {
		state.workzs = data;
	},
	[types.PRAISE] (state, data) {
		const workzIndex = state.workzs.findIndex(v => v._id == data._id);
		state.workzs.splice(workzIndex, 1, data);
		state.workzs = [...state.workzs]
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}