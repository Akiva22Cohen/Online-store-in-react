import React, { useContext, useState } from 'react';
import SignUp from './SignUp';
import Login from './LogIn';
import GlobalContextData from './GlobalContextData';

export default function Connection() {
    const [connect, setConnect] = useState();
    const { user, setUser } = useContext(GlobalContextData);

    return (
        <div className=''>
            <div className='text-center'>
                <h2>Connection</h2>
                <div className='btn-group text-bg-warning'>
                    <button
                        className='btn border border-dark'
                        onClick={() => setConnect('SignUp')}
                    >
                        SignUp
                    </button>
                    <button
                        className='btn border border-dark'
                        onClick={() => setConnect('LogIn')}
                    >
                        LogIn
                    </button>
                </div>
            </div>
            <div className='mt-3'>
                {!user && connect === 'SignUp' && <SignUp />}
                {!user && connect === 'LogIn' && <Login />}
            </div>
        </div>
    )
}
