import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = ({children}: {children: JSX.Element}) => {
    const { registeredUser, signIn, signOut } = useAuth()
    const location = useLocation()

    if (!registeredUser) {
        return <Navigate to="/login" state={{ from : location }} replace />
    }

    return <>{children}</>

}

export default RequireAuth