import { Navigate } from "react-router-dom";
import { obterToken } from "../../utils/storage";

function ProtectedRoute({children}){
    const token = obterToken()

    if(!token){
        return <Navigate to="/login" replace/>
    }

    return children
}

export default ProtectedRoute