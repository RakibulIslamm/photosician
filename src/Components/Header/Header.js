import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebaseInit';
import avatar from '../../images/avatar.png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return
    }

    return (
        <div className='border-b border-gray-200 sticky top-0 bg-white z-50'>
            <div className='px-[80px] max-w-[1920px] mx-auto flex justify-between items-center'>
                <Link to='/'>
                    <h1 className='text-3xl font-[Mali] font-semibold'>Photosician</h1>
                </Link>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-6 font-[Mali]'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/about-me'>About Me</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        {!user && <CustomLink to='/login'>Login</CustomLink>}
                        {!user && <CustomLink to='/register'>Register</CustomLink>}
                    </div>
                    {
                        user && <div className='flex items-center gap-2 font-[Mali]'>
                            <img className='w-8 h-8 rounded-full' src={!user.photoURL ? avatar : user.photoURL} alt="" />
                            <div className='flex items-center gap-4'>
                                <h5 className='font-[600]'>{user?.displayName}</h5>
                                <button onClick={() => signOut(auth)} className=' text-red-600 font-bold'>Log Out</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;