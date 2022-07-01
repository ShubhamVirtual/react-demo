import React from 'react'
import {Link} from "react-router-dom"

export default function LoginNavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                    <Link className="nav-link" to="/registration">Registration</Link>
                    
                </div>
                
            </div>
        </nav>
    </>
  )
}
