import { createStore } from 'vuex'
import profile from '@/store/modules/profile/'

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
    setStatus(state, status) {
      state.status = status
    }
  },
  actions: {},
  modules: {
    profile
  }
})

export default store