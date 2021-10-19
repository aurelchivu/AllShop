import React from 'react';

const Navbar = () => {
  const signedIn = false;
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand px-1' href='/'>
          AllShop
        </a>
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
                <a className='nav-link active' aria-current='page' href='/myaccount'>
                  <i className='fas fa-user'></i>
                  {` My account`}
                </a>
              </li>
            ) : (
              <li className='nav-item px-1'>
                <a className='nav-link active' aria-current='page' href='/signin'>
                  <i className='fas fa-user'></i>
                  {` SignIn`}
                </a>
              </li>
            )}
            <li className='nav-item px-1'>
              <a className='nav-link active' aria-current='page' href='/cart'>
                <i className='fas fa-shopping-cart'></i>
                {` Cart`}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
