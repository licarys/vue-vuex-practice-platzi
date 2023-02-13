const store = {
  profile: {
    username: ''
  },
  contacts: [
    {
      id: 1,
      username: 'User 1'
    },
    {
      id: 2,
      username: 'User 2'
    }
  ],
  messages: [
    {
      id: 1,
      author: 2,
      message: 'Hola :D'
    },
    {
      id: 2,
      author: 1,
      message: 'Hey!!'
    },
    {
      id: 3,
      author: 2,
      message: 'Hola :D'
    },
    {
      id: 4,
      author: 1,
      message: 'Hey!!'
    }
  ],
  channels: [
    {
      id: 1,
      title: 'Canal 1',
      messages: [1, 2]
    },
    {
      id: 2,
      title: 'Canal 2',
      messages: [3, 4]
    }
  ]
}