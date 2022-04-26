import { AuthContext } from "../contexts/AuthContext"
import React, { useContext } from "react"


export const useAuth = () => {
    const authContext = useContext(AuthContext);
    return authContext;
}
