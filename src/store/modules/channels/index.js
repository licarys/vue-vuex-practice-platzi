const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: 'Channel 1', messages: [] },
        { id: 2, name: 'Channel 2', messages: [] },
        { id: 3, name: 'Channel 3', messages: [] },
        { id: 4, name: 'Channel 4', messages: [] },
      ]
    }
  },
  getters: {
    getChannels: (state) => (query) => {
      return state.channels.filter((channel) => channel.name.toLowerCase().includes(query.toLowerCase() ))
    }
  }
}

export default module