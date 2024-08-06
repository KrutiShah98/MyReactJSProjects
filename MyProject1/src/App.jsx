import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './PROJECT/MyFireBaseProject/Router'
import ProjectRouter from './PROJECT/MyFireBaseProject/AdminUserLogin/ProjectRouter'
import Redux_Router from './11Redux/Redux_Router'
import AllHooks from './Hooks/AllHooks'
import Ex1 from './ReusableComponent/Ex1'
import ApiFetch from './Practice/ApiFetch'

export default function App() {
  return (
    <div>
     {/* <Router/> */}
     <ProjectRouter/>

     {/* <Redux_Router/> */}
     {/* <AllHooks/> */}
     {/* <ApiFetch/> */}
     {/* <Ex1/> */}
    </div>
  )
}
