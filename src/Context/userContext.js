import React from 'react'

const UserContext = React.createContext({
  userList: [
    {
      id: 1,
      username: 'rohit',
      name: 'Rohit Sharma',
      email: 'rohit@123.com',
      active: true,
    },
    {
      id: 2,
      username: 'virat',
      name: 'Virat Kohli',
      email: 'virat@321.com',
      active: false,
    },
    {
      id: 3,
      username: 'yashas_p',
      name: 'Yashas P',
      email: 'yashas123@gmail.com',
      active: true,
    },
  ],
  removeUser: () => {},
})

export default UserContext
