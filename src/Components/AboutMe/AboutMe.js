import React from 'react';
import author from '../../images/Photographer_Image.jpg'

const AboutMe = () => {
    return (
        <div className='my-20 min-h-screen'>
            <div className='px-[80px] xs:px-4 max-w-[1920px] mx-auto flex justify-between items-center'>
                <div className='w-6/12'>
                    <img className='w-[300px] mx-auto' src={author} alt="" />
                </div>
                <div className='w-full'>
                    <h2 className='text-3xl'>Rakibul Islam</h2>
                    <p className='mb-6'>Photographer</p>
                    <p>Through photography, cinematography, and creative direction, Dylan's work immerses his audience in the mystique of nature, creating a unique look and feel through a complex simplicity in subject matter and color. Inspired by imminent days of inclement weather, his work encourages a simple shift in perspective, bringing new life to the dark days.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;