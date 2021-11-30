import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/features/usersSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const numItems = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

  const userLogin = useSelector((state) => state.users.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand px-1'>
          AllShop
        </Link>
        <form className='d-flex col-4'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search for the best products in the world'
            aria-label='Search'
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {userInfo ? (
              <>
                <div className='dropdown'>
                  <span
                    className='btn dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {userInfo.name.toUpperCase()}
                  </span>
                  <ul
                    className='dropdown-menu dropdown-menu-dark'
                    aria-labelledby='navbarDarkDropdownMenuLink'
                  >
                    <li className='dropdown-item'>
                      <Link to='/profile'>Profile</Link>
                    </li>
                    <li className='dropdown-item' onClick={logoutHandler}>
                      Logout
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <li className='nav-item px-1'>
                <Link
                  to='/login'
                  className='nav-link active'
                  aria-current='page'
                >
                  <i className='fas fa-user'></i>
                  {` Sign In`}
                </Link>
              </li>
            )}
            <li className='nav-item px-1'>
              <Link to='/cart' className='nav-link active' aria-current='page'>
                <i className='fas fa-shopping-cart'></i>
                {numItems ? `  ${numItems}` : ` Cart`}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
