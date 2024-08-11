import React, {useContext} from 'react'
import UserContext from '../../Context/userContext'
import Sidebar from '../Sidebar'

function UserListing() {
  const {userList, removeUser} = useContext(UserContext)

  const activeUsers = userList.filter(user => user.active).length

  const onClickBan = userId => {
    if (window.confirm('Are you sure you want to ban this user?')) {
      removeUser(userId)
    }
  }

  const onClickEdit = userId => {
    console.log('Edit user with ID:', userId)
  }

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="user-listing p-5 main w-100">
        <h1>User Listing</h1>
        <div className="kpi-cards">
          <div>Total Users: {userList.length}</div>
          <div>Users Active in the Last 24 Hours: {activeUsers}</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-warning m-auto"
                    onClick={() => onClickEdit(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger m-auto"
                    onClick={() => onClickBan(user.id)}
                  >
                    Ban
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserListing
