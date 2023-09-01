import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/_app'
import App from './pages'
import main from './pages'
import MyApp from './pages/playlists/main'

const Routes1 = () => {
  return (
    <BrowserRouter>
      <routes>
        <Route
          path='</donate>'
          element={<donate/>}
        />
        <Route path= '/' element ={<MyApp/>} />
  /      <Route
          path= '/'
          element={<main/>}
        />
      </routes>
    </BrowserRouter>
  )
}

export default Routes1