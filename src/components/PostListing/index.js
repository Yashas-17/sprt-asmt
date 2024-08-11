import React, {useContext, useState} from 'react'
import Sidebar from '../Sidebar'
import PostContext from '../../Context/postContext'

function PostListing() {
  const {postList, removePost} = useContext(PostContext)
  const [isHidden, toggle] = useState(false)

  const recentPosts = postList.filter(post => {
    const postDate = new Date(post.publishedAt)
    const now = new Date()
    return (now - postDate) / (1000 * 60 * 60) < 24
  }).length

  const onClickDelete = postId => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      removePost(postId)
    }
  }

  const toggleDisplay = () => {
    toggle(prev => !prev)
  }

  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="post-listing p-5 main w-100">
        <h1>Post Listing</h1>
        <div className="kpi-cards">
          <div>Total Posts: {postList.length}</div>
          <div>Posts Published in the Last 24 Hours: {recentPosts}</div>
        </div>
        <button
          className="btn btn-primary mb-3"
          onClick={toggleDisplay}
        >
          {isHidden ? 'Show All' : 'Hide All'}
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Caption</th>
              <th>Media URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {postList.map(
              post =>
                !isHidden && (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.caption}</td>
                    <td>
                      <a
                        href={post.mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.mediaUrl}
                      </a>
                    </td>
                    <td className="m-auto">
                      <button
                        className="btn btn-sm btn-outline-danger mr-2"
                        onClick={() => onClickDelete(post.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PostListing
