import {createContext, useContext, useEffect, useState} from 'react'
import {GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //sign in with Google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    //sign out
    const logOut = () => {
        signOut(auth)
    }

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logOut
    }

    //set currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}





