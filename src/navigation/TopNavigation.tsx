import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import { StaticKeyWords as sk } from '../constants/config'

const TopNavigation: React.FC = () => {
    return (
        <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-3 shadow">
            <Link to={'/dashboard'}>
             <h5 className='mx-3'>{sk?.title}</h5>
            </Link>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <button type="button" className="btn btn-outline-success me-2 ">Schedular</button>
            </ul>
            <div className="col-md-3 text-end px-5">
                <Link to={'/login'}>
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </Link>
            </div>
        </header>
    )
}

export default TopNavigation