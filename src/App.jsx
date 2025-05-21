// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './user/loginform'
import RegisterForm from './user/registerform'
import ForgotPassword from './user/forgotpassword'
import ChangePassword from './user/changepassword'
import AdminPage from './user/adminpage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/daftar" element={<RegisterForm />} />
        <Route path="/lupa-sandi" element={<ForgotPassword />} />
        <Route path="/ubah-sandi" element={<ChangePassword />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default App