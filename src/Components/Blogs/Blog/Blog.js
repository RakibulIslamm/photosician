import React from 'react';

const Blog = ({ data }) => {
    console.log(data);
    return (
        <div className='border border-gray-200 p-8'>
            <div>
                <h3 className=' text-2xl font-semibold'>{data?.question}</h3>
                <p>{data?.ans}</p>
            </div>
        </div>
    );
};

export default Blog;