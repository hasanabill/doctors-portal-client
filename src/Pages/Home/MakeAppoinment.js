import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='flex  justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white py-5' >Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid excepturi delectus saepe pariatur ad? Nulla laboriosam omnis nostrum aperiam aspernatur sint quidem cupiditate expedita! Debitis, vel magnam ullam reiciendis eaque officia id repellendus natus repellat nulla fuga tempore. Inventore?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;