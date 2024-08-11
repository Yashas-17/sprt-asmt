import React, {useContext, useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import UserListing from './components/UserListing'
import PostListing from './components/PostListing'
import Login from './components/Login'
import {GlobalStyle} from './styledComponents'
import UserContext from './Context/userContext'
import PostContext from './Context/postContext'

const App = () => {
  // Access userList and postList from their respective contexts
  const {userList} = useContext(UserContext)
  const {postList} = useContext(PostContext)

  // Initialize state with userList and postList
  const [currentUserList, setUserList] = useState([])
  const [currentPostList, setPostList] = useState([])

  // Sync state with context data
  useEffect(() => {
    setUserList(userList)
  }, [userList])

  useEffect(() => {
    setPostList(postList)
  }, [postList])

  // Define remove functions
  const removeUser = id => {
    setUserList(prev => prev.filter(user => user.id !== id))
  }

  const removePost = id => {
    setPostList(prev => prev.filter(post => post.id !== id))
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          userList: currentUserList,
          removeUser,
        }}
      >
        <PostContext.Provider
          value={{
            postList: currentPostList,
            removePost,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserListing} />
            <Route exact path="/posts" component={PostListing} />
          </Switch>
        </PostContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
