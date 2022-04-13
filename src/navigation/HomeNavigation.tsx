import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../home/Home'
import ClassAnalysis from '../pages/class/ClassAnalysis'
import TeacherAnalysis from '../pages/teacher/TeacherAnalysis'
import StudentAnalysis from '../pages/student/StudentAnalysis'
import Landing from '../pages/landing/Landing'

const HomeNavigation: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="class" element={<ClassAnalysis />} />
        <Route path="teacher" element={<TeacherAnalysis />} />
        <Route path="student" element={<StudentAnalysis />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default HomeNavigation