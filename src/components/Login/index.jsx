import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  const submitForm = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const response = await fetch(
      'https://apis.ccbp.in/login',
      {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
    )

    const data = await response.json()

    if (response.ok) {
      Cookies.set(
        'jwt_token',
        data.jwt_token,
        {expires:30}
      )

      navigate('/')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  const token = Cookies.get(
    'jwt_token'
  )

  if (token !== undefined) {
    return <Navigate to="/" />
  }

  return (
    <div className="login-container">

      <div className="overlay">

        <form
          className="login-card"
          onSubmit={submitForm}
        >

          <h1 className="travel-logo">
            Travel Trip
          </h1>

          <p className="travel-text">
            Explore Amazing Destinations
          </p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

          <p className="error">
            {errorMsg}
          </p>

        </form>

      </div>

    </div>
  )
}

export default Login