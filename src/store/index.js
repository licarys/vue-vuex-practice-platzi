import { createStore } from 'vuex'
import profile from '@/store/modules/profile/'
import channels from '@/store/modules/channels/'
import messages from '@/store/modules/messages/'
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
    profile,
    channels,
    messages
  }
})

export default store