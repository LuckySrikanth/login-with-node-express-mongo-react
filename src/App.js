import React, { createContext, useState } from 'react'
import Login from './Login'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./Nav"
import Register from './Register'
import MyProfile from './MyProfile'

export const store = createContext() ;

const App = () => {
  const [token, setToken] = useState(null)

  return (
    <div>
      <store.Provider value={[token, setToken]}>
     <BrowserRouter>
     <Nav />
     <Routes>
      <Route exact path = "/register" element = {<Register />} />
      <Route exact path = "/login" element = {<Login />} />
      <Route exact path = "myprofile" element= {< MyProfile/>} />
      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App