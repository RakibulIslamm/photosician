import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleIcon from '../../images/GoogleIcon.png';

import useAuth from '../hooks/useAuth';

const Login = () => {
    const [resetEmail, setResetEmail] = useState('');
    const { login, loading, googleSignin, resetPassword, error } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();


    // Google Login
    const handleGoogleSignIn = () => {
        googleSignin(navigate, location);
    }

    // Login with email and password
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password, location, navigate)
    }

    const handleResetPassword = () => {
        if (!resetEmail) {
            toast.warn('Please enter your email')
        }
        else {
            resetPassword(resetEmail);
        }
    }

    return (
        <div className='flex justify-center items-center flex-col h-screen min-h-[600px]'>
            <h1 className='text-3xl py-5'>Please Login</h1>
            <div className="w-full max-w-lg ">
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-100">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="email" onChange={(e) => { setResetEmail(e.target.value) }} name='email' placeholder="example@email.com" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required type="password" name='password' placeholder="*************" />
                    </div>
                    <p className="mb-6 text-red-600 font-normal text-sm">{error}</p>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                            {loading ? 'Loading...' : 'Sign In'}
                        </button>
                        <div>
                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/register'>
                                Don't have an account?
                            </Link><br />
                            <button onClick={handleResetPassword} type='button' >{loading ? 'Loading...' : 'Reset Password'}</button>
                        </div>
                    </div>
                </form>
                <h3 className='text-center'>Or</h3>
                <div className='py-3'>
                    <button onClick={handleGoogleSignIn} className='flex items-center gap-2 mx-auto px-4 py-2 border border-gray-400 rounded-full shadow-md'>Google Sign In
                        <img className='w-5 h-5' src={GoogleIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;