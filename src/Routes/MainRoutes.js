import React,{lazy}  from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const LoginRegistration = lazy(() => import('../Container/LoginRegistration/LoginRegistration'));
// const Registration = lazy(() => import('../Container/LoginRegistration/Registration/Registration'))

export default function MainRoutes() {
  return (
    <>  
        <BrowserRouter>
            <Routes>
                <Route exact path="/"  element={<LoginRegistration pageName="login" />} />
                <Route exact path="/login"  element={<LoginRegistration pageName="login" />} />
                <Route exact path="/registration" element={<LoginRegistration pageName="registration" />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
