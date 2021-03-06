import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treat, date, setTreat, refetch }) => {
    const { _id, name, slots, price } = treat;
    const [user] = useAuthState(auth)
    const formattedDate = format(date, 'PP')
    const handleBooking = e => {
        e.preventDefault()
        const slot = e.target.slot.value;

        const booking = {
            treatId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user?.email,
            patientName: user?.displayName,
            phone: e.target.phone.value
        }

        fetch('https://fathomless-hamlet-23429.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appoinment booked on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You Already have an appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreat(null);
            })


    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-3'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;