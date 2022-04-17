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
            <div className='grid grid-cols-4 gap-6 px-[80px] max-w-[1920px] mt-6'>
                {services.map(service => <Service key={service.id} service={service} />)}
            </div>
        </div>
    );
};

export default Services;