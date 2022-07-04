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
                    {(props.pageName === "login") ? <Login pageName='login' /> : ""}
                    {(props.pageName === "registration") ? <Registration pageName='registration' /> : ""}
                        
                    </div>
                    <div className='col-lg-7'>
                        <img src="./assets/images/login.svg" className='img-fluid pull-right pt-5' style={{width: '100vw'}}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
