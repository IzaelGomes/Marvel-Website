import React, { Children, useContext, useEffect } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import AuthContext, { useAuth } from "../../Contexts/ContextProvider"
import Login from "../../pages/Login"


const PrivateRouter = ({ children }: any) => {
    const { isReady, user } = useAuth();

    if (!isReady) return <p>Loading...</p>;

    if (!user) return <Navigate to="/" replace />;

    return children;

}

export default PrivateRouter