import React, {useContext} from 'react'
import Sidebar from '../Sidebar'
import UserContext from '../../Context/userContext'
import PostContext from '../../Context/postContext'
import './index.css'

function Home() {
  const {userList} = useContext(UserContext)
  const {postList} = useContext(PostContext)

  const activeUsers = userList.filter(user => user.active).length

  const recentPosts = postList.filter(post => {
    const postDate = new Date(post.publishedAt)
    const now = new Date()
    return (now - postDate) / (1000 * 60 * 60) < 24
  }).length

  return (
    <div className="d-flex flex-row ">
      <Sidebar />
      <div className=""></div>
      <div className="container  p-5 main">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-white bg-primary border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text fs-3">{userList.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-white bg-success border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Posts</h5>
                <p className="card-text fs-3">{postList.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-white bg-warning border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Active Users (Last 24h)</h5>
                <p className="card-text fs-3">{activeUsers}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card text-white bg-info border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Recent Posts (Last 24h)</h5>
                <p className="card-text fs-3">{recentPosts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
