import React from 'react';
import img from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner2 = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content sm:gap-10 md:gap-10 lg:gap-24 flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='Treatment' />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;