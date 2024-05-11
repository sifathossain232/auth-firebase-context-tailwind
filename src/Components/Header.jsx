import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl text-black">Auth<span className='text-white'>_</span><span className='text-red-700'>Master</span></button>
                <Link className="btn btn-ghost text-xl" to= '/'>Home</Link>
                <Link className="btn btn-ghost text-xl" to= '/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to= '/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;