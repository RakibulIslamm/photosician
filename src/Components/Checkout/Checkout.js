import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Checkout = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const { title, img, shortDesc, desc, price } = service;
    const { user } = useAuth()

    // Single Service load
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            const singleService = data.find(s => s.id === parseInt(id));
            setService(singleService);
        }
        fetchData();
    }, [id]);

    if (!user) {
        return;
    }

    console.log(user);

    const handleCheckout = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.number.value;
        const address = e.target.address.value;
        const note = e.target.note.value;

        console.log(name, email, phone, address, note);

    }



    return (
        <div>
            <div className='px-[80px] max-w-[1920px] mx-auto py-8 flex justify-between items-start gap-10'>
                <div className='w-full bg-slate-200 p-8'>
                    <img className='w-[200px]' src={img} alt="" />
                    <h2 className='text-3xl py-3'>{title}</h2>
                    <p className='mb-5'>----{shortDesc}</p>
                    <p>{desc}</p>
                    <p className='py-3 font-bold text-lg'>${price}</p>
                </div>
                <div className='w-full'>
                    <h1 className='text-3xl font-bold pb-5'>CheckOut</h1>
                    <form onSubmit={handleCheckout}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Full Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" name='name' placeholder="Full Name" value={user.displayName} readOnly />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="email" name='email' readOnly value={user.email} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Phone Number
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" name='number' placeholder="+881234567890" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" name='address' placeholder="12/A Danmondi, Dhaka" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Note
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='note' placeholder="Aditional information" />
                        </div>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Checkout</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;