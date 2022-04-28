import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RequireAuth from '../utils/RequireAuth'
import Home from '../home/Home'
import ClassAnalysis from '../pages/class/ClassAnalysis'
import TeacherAnalysis from '../pages/teacher/TeacherAnalysis'
import StudentAnalysis from '../pages/student/StudentAnalysis'
import Landing from '../pages/landing/Landing'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import CompareTools from '../pages/compare/CompareTools'
import { AuthProvider } from '../contexts/AuthContext'

const HomeNavigation: React.FC = () => {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/select-session"
          element={
            <RequireAuth>
              <Landing />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
         <Route
          path="compare"
          element={
            <RequireAuth>
              <CompareTools />
            </RequireAuth>
          } />
        
        <Route
          path="class"
          element={
            <RequireAuth>
              <ClassAnalysis />
            </RequireAuth>
          } />
        <Route
          path="teacher"
          element={
            <RequireAuth>
              <TeacherAnalysis />
            </RequireAuth>
          } />
        <Route
          path="student"
          element={
            <RequireAuth>
              <StudentAnalysis />
            </RequireAuth>
          } />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default HomeNavigation