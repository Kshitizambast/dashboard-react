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
import { useAuth } from './hooks/useAuth'
import { AuthProvider } from './contexts/AuthContext'

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

  const user = localStorage.getItem('user')

  return (


    <div className='row m-0 p-0'>
      <AuthProvider>
      <TopNavigation />
      <div className="row">
        <main>
          <div className='row'>
            <div className='col-lg-2 col-md-4 p-0'>
              {
                  user &&
                  <SideNavigation />
              }
            
            </div>
            <div className='col-lg-10 col-md-8 d-flex justify-content-center text-center'>
              <HomeNavigation />
              {/* <Landing /> */}
            </div>
          </div>

          {/* <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/login' element={<Login />} />
              </Routes> */}

        </main>
      </div>
      </AuthProvider>
    </div>
  )
}

export default App
