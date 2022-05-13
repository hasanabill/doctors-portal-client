import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treat, setTreat] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3 className='text-xl text-secondary text-center'>Available Appoinments: {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreat={setTreat}
                    ></Service>)
                }
            </div>
            {treat && <BookingModal
                date={date}
                treat={treat}
                setTreat={setTreat}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;