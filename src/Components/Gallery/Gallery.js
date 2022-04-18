import React from 'react';
import img1 from '../../images/gallery-images/photocard-3-770x770.jpg'
import img2 from '../../images/gallery-images/photojhhn.jpg'
import img3 from '../../images/gallery-images/portfolio-15-770x770.jpg'
import img4 from '../../images/gallery-images/portfolio-17-770x770.jpg'
import img5 from '../../images/gallery-images/portfolio-grid-13-770x770.jpg'
import img6 from '../../images/gallery-images/portfolio-grid-14-770x770.jpg'
import img7 from '../../images/gallery-images/portfolio-grid-2-770x770.jpg'
import img8 from '../../images/gallery-images/portfolio-grid-3-770x770.jpg'
import img9 from '../../images/gallery-images/portfolio-grid-4-770x770.jpg'
import GalleryImage from './GalleryImage/GalleryImage';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    return (
        <div className='border-t border-gray-200 relative top-5'>
            <div className='px-[80px] py-10 xs:px-4 sm:px-8 max-w-[1920px] mx-auto'>
                <h1 className='text-center text-3xl font-bold'>Photo Gallery</h1>
                <div className='grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-5 my-5'>
                    {images.map(image => <GalleryImage key={image} photo={image} />)}
                </div>
            </div>
        </div>
    );
};

export default Gallery;