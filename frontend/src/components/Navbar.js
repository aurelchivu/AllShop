import React from 'react';

const Navbar = () => {
  const signedIn = true;
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='/'>
          AllShop
        </a>
        <form class='d-flex col-4'>
          <input
            class='form-control me-2'
            type='search'
            placeholder='Search for the best products in the world'
            aria-label='Search'
          />
          <button class='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ml-auto'>
            {signedIn ? (
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='/myaccount'>
                  <i class='fas fa-user'></i>
                  My account
                </a>
              </li>
            ) : (
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='/signin'>
                  <i class='fas fa-user'></i>
                  SignIn
                </a>
              </li>
            )}
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='/cart'>
                <i class='fas fa-shopping-cart'></i>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
