import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/_app'
import App from './pages'

const Routes1 = () => {
  return (
    <BrowserRouter>
      <routes>
        <Route
          path='</donate>'
          element={<donate/>}
        />
        <Route path= '/' element ={<Homepage/>} />
  /      <Route
          path= '/login'
          element={<App/>}
        />
      </routes>
    </BrowserRouter>
  )
}

export default Routes1