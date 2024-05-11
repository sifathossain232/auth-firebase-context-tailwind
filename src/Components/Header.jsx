import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-around">
                <h4 className="text-xl text-black font-bold">Auth<span className='text-white'>_</span><span className='text-red-700'>Master</span></h4>
                <div>
                    <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost text-xl" to='/orders'>Orders</Link>
                    {user && <Link className="btn btn-ghost text-xl" to='/profile'>Profile</Link>}
                    <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                    <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                        </> : <Link to='/login'></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;