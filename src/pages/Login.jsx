import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const {currentUser, signInWithGoogle} = useAuth()
  console.log(currentUser)
  
  const handleLogin = async() => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if(currentUser){
      navigate("/chat")
    }
  }, [currentUser])

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there👋🏻</h1>
        <p className="py-6">
            Join the conversation, meet new people,
            and make connections in one shared room.
        </p>
        <button onClick={handleLogin} className="btn btn-neutral">Login with Google</button>
      </div>
    </div>
  </div>
  )
}

export default Login