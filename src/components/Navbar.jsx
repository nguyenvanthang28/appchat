import React from 'react'
import { useAuth } from '../context/AuthContext'


const Navbar = () => {
  const {currentUser, logOut} = useAuth()

  const handleSignout = async() => {
    try {
      await logOut()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
       <div className="containerWrap flex justify-between">
            <button className="btn btn-ghost text-xl">My Chat</button>
            {currentUser && <button onClick={handleSignout} className='btn btn-ghost text-xl'>Logout</button>}
       </div>
    </div>
  )
}

export default Navbar