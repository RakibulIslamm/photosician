import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='border-b border-gray-200 sticky top-0 bg-white'>
            <div className='px-[80px] max-w-[1920px] mx-auto flex justify-between items-center'>
                <Link to='/'>
                    <h1 className='text-3xl font-[Mali] font-semibold'>Photosician</h1>
                </Link>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-6 font-[Mali]'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/about-me'>About Me</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <CustomLink to='/login'>Login</CustomLink>
                        <CustomLink to='/register'>Register</CustomLink>
                    </div>
                    <div className='flex items-center gap-2 font-[Mali]'>
                        <img className='w-8 h-8' src={avatar} alt="" />
                        <div className='flex items-center gap-4'>
                            <h5 className='font-[600]'>Rakibul Islam</h5>
                            <button className=' text-red-600 font-bold'>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;