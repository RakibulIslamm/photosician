import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data.json');
            const data = await response.json();
            setServices(data);
        }
        fetchData();
    }, [])

    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl font-bold'>Services</h1>
            <div className='grid grid-cols-4 gap-6 xs:grid-cols-1 sm:grid-cols-1 xs:gap-3 sm:gap-3 px-[80px] xs:px-4 sm:px-8 max-w-[1920px] mt-6'>
                {services.map(service => <Service key={service.id} service={service} />)}
            </div>
        </div>
    );
};

export default Services;