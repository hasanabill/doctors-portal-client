import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from './../Shared/Loading';

const AvailableAppoinment = ({ date }) => {
    const [treat, setTreat] = useState(null)

    const formatedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-xl text-secondary text-center'>Available Appoinments: {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;