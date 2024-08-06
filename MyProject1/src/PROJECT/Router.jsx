import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productdisplay from './Productdisplay'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Productdisplay/>}></Route>
            

        </Routes>
        </BrowserRouter>
    </div>
  )
}
