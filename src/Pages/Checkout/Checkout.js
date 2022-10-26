import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutDetails from './CheckoutDetails';

const Checkout = () => {
    const checkout = useLoaderData();
    return (
        <div>
          {
            checkout.map( details => <CheckoutDetails
            key={details._id}
            details={details}
            ></CheckoutDetails>)
          }
        </div>
    );
};

export default Checkout;