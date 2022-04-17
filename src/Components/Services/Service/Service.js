import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(service);
    return (
        <div className='flex justify-between items-center flex-col border border-gray-200 rounded-tl-2xl rounded-br-2xl px-4 py-6 text-center'>
            <img className='w-[100px]' src={service?.img} alt="" />
            <h2 className='text-xl font-semibold text-center pt-3'>{service?.title}</h2>
            <p className='font-light text-sm'>{service?.shortDesc}</p>
            <p className='py-3 font-bold text-lg'>${service?.price}</p>
            <Link className='px-3 bg-[#ffc8ee]' to={`/checkout/${service?.id}`}>Book Now &#62;&#62;</Link>
        </div>
    );
};

export default Service;