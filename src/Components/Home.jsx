import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className='text-center mt-52'>
            <h2>This is Home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;