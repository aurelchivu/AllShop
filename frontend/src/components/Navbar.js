import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const signedIn = false;
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
            {signedIn ? (
              <li className='nav-item'>
                <Link
                  to='/myaccount'
                  className='nav-link active'
                  aria-current='page'
                >
                  <i className='fas fa-user'></i>
                  {` My account`}
                </Link>
              </li>
            ) : (
              <li className='nav-item px-1'>
                <Link
                  to='/signin'
                  className='nav-link active'
                  aria-current='page'
                >
                  <i className='fas fa-user'></i>
                  {` SignIn`}
                </Link>
              </li>
            )}
            <li className='nav-item px-1'>
              <Link to='/cart' className='nav-link active' aria-current='page'>
                <i className='fas fa-shopping-cart'></i>
                {` Cart`}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
