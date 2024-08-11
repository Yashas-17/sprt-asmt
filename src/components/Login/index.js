import React, {useState} from 'react'
import {Route, Redirect} from 'react-router-dom'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    if (email && password) {
      const {history} = props
      history.replace('/')
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
