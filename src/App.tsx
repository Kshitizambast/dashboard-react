import { useEffect, useState } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Landing from './pages/landing/Landing'
import TopNavigation from './navigation/TopNavigation'
import ClassAnalysis from './pages/class/ClassAnalysis'
import TeacherAnalysis from './pages/teacher/TeacherAnalysis'
import StudentAnalysis from './pages/student/StudentAnalysis'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './home/Home'
import HomeNavigation from './navigation/HomeNavigation'
import SideNavigation from './navigation/SideNavigation'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'

function App() {
  const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true)


  const navigate = useNavigate()

  // useEffect(() => {
  //   if(!loggedIn) {
  //     navigate('/signup')
  //     console.log(navigate)
  //   }

  // }, [])

  return (
    <div>
      <TopNavigation />
      <div className="row">
        <main>
            {
              loggedIn ?
              <div className='row'>
              <div className='col-lg-2 col-md-4'>
              <SideNavigation />
            </div>
            <div className='col-lg-10 col-md-8 d-flex justify-content-center'>
              {/* <HomeNavigation /> */}
              <Landing />
            </div>
            </div>
            : 
              <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            }
        </main>
      </div>
    </div>
  )
}

export default App
