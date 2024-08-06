import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import Dashboard from './Dashboard'
import Login from './Login'
import Guest from './Guest'
import EditPage from './EditPage'
import NewPost from './NewPost'
import ViewPost from './ViewPost'
import MyPost from './MyPost'
import ChatScreen from './ChatScreen'
import Alluser from './Alluser'






export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<RegistrationPage />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/guest' element={<Guest/>}></Route>
          <Route path='/edit/:uid' element={<EditPage />}></Route>
          <Route path='/newpost' element={<NewPost/>}></Route>
          <Route path="/viewpost" element={<ViewPost/>}></Route>
          <Route path="/mypost" element={<MyPost/>}></Route>
          <Route path="/alluser" element={<Alluser/>}></Route>

          <Route path="/chatscreen/:uid" element={<ChatScreen/>}></Route>








        </Routes>
      </BrowserRouter>
    </div>
  )
}
