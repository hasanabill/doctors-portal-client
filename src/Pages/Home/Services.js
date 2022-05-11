import React from 'react';
import ServiceCard from './ServiceCard';
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'

const Services = () => {
    return (
        <>
            <div className='py-10'>
                <h4 className='font-bold text-xl text-center text-primary'>OUR SERVICES</h4>
                <h1 className='text-4xl text-center'>Services We Provide</h1>
            </div>
            <div className='px-12 py-10 justify-items-center grid sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                <ServiceCard img={fluoride} cardTitle='Fluoride Treatment'></ServiceCard>
                <ServiceCard img={cavity} cardTitle='Cavity Fillingt'></ServiceCard>
                <ServiceCard img={whitening} cardTitle='Teeth Whitening'></ServiceCard>
            </div>
        </>
    );
};

export default Services;