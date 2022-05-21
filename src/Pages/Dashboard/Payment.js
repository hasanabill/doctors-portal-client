import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1iSLIOOXdauHLGUW2zSFSUq4WF6jqUkSiKwa9PlEQJjemRhzK0O3X9x8HpXnhnK5H20PuQAWle5QFawxztO3OE00y9yo0JPV');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`

    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <isLoading></isLoading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appoinment.patientName}</p>
                    <h2 class="card-title">Please Pay for {appoinment.treatment}</h2>
                    <p>Your Appoinment: {appoinment.date} at {appoinment.slot}</p>
                    <p>Please Pay: ${appoinment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;