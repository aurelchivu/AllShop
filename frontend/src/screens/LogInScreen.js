import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/usersSlice';
import Message from '../components/Message';
import Loader from '../components/Loader';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.users.userLogin);
  const { loading, userInfo, error } = userLogin;

  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center h-100'>
        <div className='row d-flex justify-content-center h-100 col-md-7 col-lg-5 col-xl-5'>
          {loading && <Loader />}
          <form onSubmit={submitHandler}>
            {error && <Message>{error}</Message>}
            <div className='form-outline mb-4 '>
              <input
                className='form-control form-control-lg'
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='form-outline mb-4'>
              <input
                className='form-control form-control-lg'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
                Sign In
              </button>
            </div>
            <div className='d-flex justify-content-around align-items-center my-3'>
              <p>
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : '/register'}
                >
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
