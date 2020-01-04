import React from 'react';
import { Link } from 'react-router-dom';

function Subnav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active '>
            <Link className='nav-link ' to='/myaccount'>
              My Account <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item '>
            <Link className='nav-link ' to='/mymonthly'>
              My Monthly
            </Link>
          </li>
          <li className='nav-item '>
            <Link className='nav-link ' to='/mypickup'>
              My Pickup
            </Link>
          </li>
          <li className='nav-item '>
            <Link className='nav-link ' to='/payment'>
              Pay My Bill
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Subnav;
