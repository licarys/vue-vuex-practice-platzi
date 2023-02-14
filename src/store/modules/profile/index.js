import { getUser } from '@/api/index.js'
import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/commons/mutation-types.js'

/**
 * To enable namespace for the module and use it globally
 */
const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '',
      details: {
        id: 1,
        name: 'Lili',
        avatar: 'avatars/avatar.jpg'
      }
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
        // commit('session/setStatus', 'active', { root: true })
        commit(COMMIT_SET_STATUS, 'active', { root: true })
      }
      
    }
  },
}

export default module