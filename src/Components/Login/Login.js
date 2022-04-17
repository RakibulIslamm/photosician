import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../images/GoogleIcon.png';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebaseInit';

const Login = () => {
    const [signInWithEmailAndPassword, createdUser, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const googleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                if (error) {
                    return
                }
                else {
                    navigate(from, { replace: true })
                }
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (loading) {
            return 'Loading...'
        }
        else {
            signInWithEmailAndPassword(email, password)
                .then(() => {
                    if (error || !createdUser) {
                        return
                    }
                    else {
                        navigate(from, { replace: true })
                    }
                })
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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="email" name='email' placeholder="example@email.com" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required type="password" name='password' placeholder="*************" />
                    </div>
                    <p className="mb-6 text-red-600 font-normal text-sm">{error?.message === 'Firebase: Error (auth/user-not-found).' && 'Email is not found'}</p>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                            {loading ? 'Loading...' : 'Sign In'}
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/register'>
                            Don't have an account?
                        </Link>
                    </div>
                </form>
                <h3 className='text-center'>Or</h3>
                <div className='py-3'>
                    <button onClick={googleSignIn} className='flex items-center gap-2 mx-auto px-4 py-2 border border-gray-400 rounded-full'>Google Sign In
                        <img className='w-5 h-5' src={GoogleIcon} alt="" />
                    </button>
                    <p className="mb-6 text-red-600 font-normal text-sm text-center">{googleError?.message}</p>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Photosician. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;