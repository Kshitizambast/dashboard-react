import React from 'react'
import { Routes, Link, Route, useNavigate } from 'react-router-dom'
import { StaticKeyWords as sk } from '../constants/config'
import { useAuth } from '../hooks/useAuth'


const TopNavigation: React.FC = () => {

    const user = localStorage.getItem('user')

    const navigate = useNavigate()


    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login', { replace: true })
    }
    const login = true
    return (
        <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap shadow">
            <Link to={'/dashboard'}>
                <h5 className='mx-3'>{sk?.title}</h5>
            </Link>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <Link to={'/select-session'}>
                    <button type="button" className="btn btn-outline-success me-2 ">Select Session</button>
                </Link>

            </ul>
            <div className="col-md-3 text-end px-3">
                {
                    user? 
                        <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                     :
                        <>
                            <Link to={'/login'}>
                                <button type="button" className="btn btn-outline-success mx-2">Login</button>
                            </Link>
                            <Link to={'/signup'}>
                                <button type="button" className="btn btn-primary">Sign-up</button>
                            </Link>
                        </>
                }
                {/* <Link to={'/login'}>
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </Link> */}
            </div>
        </header>
    )
}

export default TopNavigation