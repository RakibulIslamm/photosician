import React from 'react';

const GalleryImage = ({ photo }) => {
    return (
        <figure className="c4-izmir c4-image-zoom-in c4-border-ccc-3 h-[350px]">
            <img src={photo} alt='' />
            <figcaption className='c4-reveal-right'>

            </figcaption>
        </figure>
    );
};

export default GalleryImage;