import React from 'react';
import banner from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content sm:gap-10 md:gap-10 lg:gap-24 flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl" alt='This is a chair' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;