import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import {Navigate, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>

      <Routes>
        <Route path="" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      
      <ToastContainer />
    </>
  )
}

export default App
