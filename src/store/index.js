import { createStore } from 'vuex'
import profile from '@/store/modules/profile/'
import { COMMIT_SET_STATUS } from '../commons/mutation-types'

const store = createStore({
  state() {
    return {
      status: null
    }
  },
  getters: {
    otherFirstName:(state, getters, rootState)  => (c) => {
      return rootState.profile.username.split('').join(c)
    }
  },
  mutations: {
    [COMMIT_SET_STATUS](state, status) {
      state.status = status
    }
  },
  actions: {},
  modules: {
    profile
  }
})

export default store