import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const { id } = useParams();

    return (
        <div>
            This is checkout Page {id}
        </div>
    );
};

export default Checkout;