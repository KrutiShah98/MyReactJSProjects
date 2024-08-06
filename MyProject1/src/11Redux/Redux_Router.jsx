import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainRedux from './MainRedux'
import { Provider } from 'react-redux'
import { store } from './app/store'
import ReduxComponent1 from './ReduxComponent1'

export default function Redux_Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/'Component={MainRedux}></Route>
          <Route path='/'Component={ReduxComponent1}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
