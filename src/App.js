import logo from './logo.svg';
import './App.css';
import Login from "./Componants/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <div className='login_page py-4'>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-lg-5'>
                <Login />
            </div>
            <div className='col-lg-7 d-flex justify-content-end align-items-end'>
              <img src="./assets/images/login.svg" className='img-fluid pull-right' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
