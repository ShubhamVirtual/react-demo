import React from 'react';
import Login from './Login/Login'
import Registration from './Registration/Registration';

export default function LoginRegistration(props) {
    
  return (
    <>
        <div className='login_page py-4'>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-lg-5'>
                        {(props.pageName === "login") ? <Login /> : ""}
                        {(props.pageName === "registration") ? <Registration /> : ""}
                        
                    </div>
                    <div className='col-lg-7 d-flex justify-content-end '>
                        <img src="./assets/images/login.svg" className='img-fluid pull-right' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
