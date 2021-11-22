import React from 'react';
import { Link } from 'react-router-dom';

const LogInScreen = () => {
  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center h-100'>
        <div className='row d-flex justify-content-center h-100 col-md-7 col-lg-5 col-xl-5'>
          <form>
            <div className='form-outline mb-4 '>
              <input
                type='email'
                id='form1Example13'
                className='form-control form-control-lg'
              />
              <label className='form-label'>Email address</label>
            </div>

            <div className='form-outline mb-4'>
              <input
                type='password'
                id='form1Example23'
                className='form-control form-control-lg'
              />
              <label className='form-label'>Password</label>
            </div>

            <div className='d-flex justify-content-around align-items-center mb-4'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='form1Example3'
                />
                <label className='form-check-label'> Remember me </label>
              </div>
              <div>
                <Link to='/forgotpassword'>Forgot password?</Link>
              </div>
            </div>
            <div className='d-flex justify-content-around align-items-center'>
              <button
                type='submit'
                className='btn btn-outline-success my-3 rounded-3'
              >
                Sign in
              </button>
            </div>
            <div className='d-flex justify-content-around align-items-center my-3'>
              <p>
                <Link to='/register'>
                  <p>Don't have an account? Register here!</p>
                </Link>
              </p>
            </div>

            <hr className='my-4'></hr>
            <div className='d-flex justify-content-around align-items-center mt-5'>
              <button
                className='btn btn-secondary rounded-3'
                style={{ backgroundColor: '#dd4b39' }}
                type='submit'
              >
                <i className='fab fa-google me-3 text-white'></i> Sign in with
                Google
              </button>
              <button
                className='btn btn-secondary rounded-3'
                style={{ backgroundColor: '#3b5998' }}
                type='submit'
              >
                <i className='fab fa-facebook-f me-3 text-white'></i> Sign in
                with Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInScreen;
