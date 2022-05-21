import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from './../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L1iSLIOOXdauHLGUW2zSFSUq4WF6jqUkSiKwa9PlEQJjemRhzK0O3X9x8HpXnhnK5H20PuQAWle5QFawxztO3OE00y9yo0JPV');

const Payment = () => {
    const { id } = useParams();
    const url = `https://fathomless-hamlet-23429.herokuapp.com/booking/${id}`

    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appoinment.patientName}</p>
                    <h2 className="card-title">Please Pay for {appoinment.treatment}</h2>
                    <p>Your Appoinment: {appoinment.date} at {appoinment.slot}</p>
                    <p>Please Pay: ${appoinment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appoinment={appoinment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;