import { createStore } from 'vuex'
import profile from '@/store/modules/profile/'

const store = createStore({
  state() {
    return {}
  },
  getters: {
    otherFirstName:(state, getters, rootState)  => (c) => {
      return rootState.profile.username.split('').join(c)
    }
  },
  mutations: {},
  actions: {},
  modules: {
    profile
  }
})

export default store