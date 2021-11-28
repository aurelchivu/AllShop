import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserDetails,
  updateUserProfile,
} from '../redux/features/usersSlice';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.users.userDetails);
  const { loading, user, error } = userDetails;

  const userLogin = useSelector((state) => state.users.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector(
    (state) => state.users.userUpdateProfile
  );
  const { success } = userUpdateProfile;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!user) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, navigate, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(
        updateUserProfile({
          id: user.id,
          name,
          email,
          password,
        })
      );
    }
  };

  return (
    <div className='row'>
      <div className='col-md-3'>
        <h3>User Profile</h3>
        {error && <Message>{error}</Message>}
        {message && <Message>{message}</Message>}
        {success && <Message>{'Profile Updated'}</Message>}
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
              Update
            </button>
          </div>
        </form>
      </div>
      <div className='col-md-9'>
        <h3>My orders</h3>
      </div>
    </div>
  );
};

export default ProfileScreen;

// Custom error handler
