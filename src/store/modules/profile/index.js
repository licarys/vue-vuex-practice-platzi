import { getUser } from '@/api/index.js'
import { COMMIT_UPDATE_USERNAME } from '@/commons/mutation-types.js'

/**
 * To enable namespace for the module and use it globally
 */
const module = {
  namespaced: true,
  state() {
    return {
      username: ''
    }
  },
  getters: {
    firstName:(state)  => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username
    }
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      const user = await getUser(1)
      console.log('getUser ', user)
      console.log('status ', rootState.status)
      commit(COMMIT_UPDATE_USERNAME, user.username)
      if(state.username) {
        commit('setStatus', 'active', { root: true })
      }
      
    }
  },
}

export default module