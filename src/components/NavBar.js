import React from 'react';
import avt from '../assets/img/avt.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='NavBar'>
            <nav className='nav'>
                <div className='profile'>
                    <img src={avt} alt='avatar' />
                </div>

                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' exact activeClassName='active'>
                            CV
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to='/portfolios'
                            exact
                            activeClassName='active'
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' exact activeClassName='active'>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className='footer'>
                    <p>@HCMUS</p>
                </footer>
            </nav>
        </div>
    );
}

export default Navbar;
