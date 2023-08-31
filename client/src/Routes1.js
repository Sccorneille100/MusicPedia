import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import SearchPage from './pages/SearchPage'
import PlaylistDetailPage from './pages/PlaylistDetailPage'

const Routes1 = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path= '/'
        element={<Homepage/>} 
        />

        <Route
          path='/login'
          element={<LoginPage/>}
        />
        <Route
          path='/signup'
          element={<SignupPage/>}
        />
        <Route
          path='/search'
          element={<SearchPage/>}
        />
        <Route
          path='/playlist/:playlistId'
          element={<PlaylistDetailPage/>}
        />
      
    </Routes>
    </BrowserRouter>
  )
}

export default Routes1
