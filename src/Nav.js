import React from 'react'
import {Link} from "react-router-dom"
import "./App.css"

const Nav = () => {
  return (
    <div>
        <center>
          <div className='nav-container'>
                <Link to = "/register" >
                    <li>Register</li><br/>
                </Link> 

                <div>
                <Link to = "/Login" >
                    <li>Login</li>
                    </Link> 
                    </div>
                    </div>
        </center>
    </div>
  )
}

export default Nav