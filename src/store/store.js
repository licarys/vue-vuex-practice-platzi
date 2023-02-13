import { reactive } from 'vue'

const store = reactive({
  username: 'licary',
  updateUsername(username) {
    this.username = username
  }
})

export default store