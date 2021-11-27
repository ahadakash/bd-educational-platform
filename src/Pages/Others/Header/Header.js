import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

// header js file

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div className='d-flex justify-content-around menu-bar backcolor'>
            <div >
                <h2 className='logo'>BD Health Care</h2>
            </div>
            <div className='all-nav'>
                <Link className='link' to='/home'>Home</Link>
                <Link className=' link' to='/services'>Services</Link>
                <Link className=' link' to='/aboutus'>About Us</Link>
                <Link className=' link' to='/contact'>Contact Us</Link>
                {user?.email ?
                    <button onClick={logOut} className="btn-style">Logout</button> :
                    <Link className=' link' to='/login'>Login</Link>}

                <a href="#login">{user?.displayName}</a>
            </div>
        </div>

    );
};

export default Header;