import React from 'react';
import banner from '../../images/bannerImg3.jpg'

const Banner = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }}>
            <div className='px-[80px] max-w-[1920px] mx-auto bg-gradient-to-r from-[#07001894] to-[#04004193] flex items-center'>
                <div className='text-white font-[Mali] w-8/12  py-40'>
                    <p className=' font-thin tracking-widest py-5'>PORTRAITS</p>
                    <h1 className='text-[50px] font-light'>The Foggy Morning</h1>
                    <p className=' font-thin text-lg'>To wake up on a foggy morning is to see a new mysterious world that has a cold, damp and claustrophobic atmosphere.</p>
                    <button className='relative top-8 border-t border-b border-white px-3 py-2 hover:bg-white hover:text-black transition-all duration-700'>LOOK ALBUM</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;