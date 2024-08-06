import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Project_Login from './Project_Login'
import AdminPage3 from './AdminPage3'
import AdminLogin from './AdminLogin'
import ResponsiveAppBar from './ResponsiveAppBar'
import AdminDashboard from './AdminDashboard'

export default function ProjectRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage3/>}></Route>
        <Route path='/login' element={<Project_Login/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/userdashboard' element={<ResponsiveAppBar/>}></Route>
        <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
        {/* <Route path='/allusers' element={<AllUsers/>}></Route> */}

        

        

        </Routes>
        </BrowserRouter>
    </div>
  )
}
