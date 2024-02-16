import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

 export const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth()

    if(!currentUser) {
        return <Navigate to='/' replace={true}/>
    }

    return children
}

