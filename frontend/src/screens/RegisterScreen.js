import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/features/usersSlice';
import Message from '../components/Message';
import Loader from '../components/Loader';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.users.userRegister);
  const { loading, userInfo, error } = userRegister;

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
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center h-100'>
        <div className='row d-flex justify-content-center h-100 col-md-7 col-lg-5 col-xl-5'>
          <h2>Sign Up</h2>
          {error && <Message>{error}</Message>}
          {message && <Message>{message}</Message>}
          {loading && <Loader />}
          <form onSubmit={submitHandler}>
            <div className='form-outline mb-4 '>
              <input
                className='form-control form-control-lg'
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className='form-outline mb-4'>
              <input
                className='form-control form-control-lg'
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className='d-flex justify-content-around align-items-center'>
              <button
                type='submit'
                className='btn btn-outline-success my-3 rounded-3'
              >
                Register
              </button>
            </div>
            <div className='d-flex justify-content-center align-items-center my-3'>

                {`Have an account? `}
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                  Login!
                </Link>
        
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;

// Custom error handler
