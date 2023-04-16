import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'



function MainRoute() {
  return (
    <>

    <Routes>
        <Route path="/" element={<Dashboard/>} />
    </Routes>

    </>
  )
}

export default MainRoute