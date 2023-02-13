import { getUser } from '@/api/index.js'
import { COMMIT_UPDATE_USERNAME } from '@/commons/mutation-types.js'

const module = {
  state() {
    return {
      username: 'temp'
    }
  },
  getters: {
    firstName:(state)  => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    async updateUsername({ commit }, username) {
      const user = await getUser(1)
      console.log('getUser ', user)
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  },
}

export default module