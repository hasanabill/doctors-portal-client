import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppoinment = () => {
    const [user] = useAuthState(auth)
    const [appoinments, setAppoinments] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-hamlet-23429.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppoinments(data)
                })
        }
    }, [user, navigate])
    return (
        <div>
            <h2>My appoinment: {appoinments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>}
                                    {(a.price && a.paid) && <>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>TraxID: <span className='text-success'>{a.transactionId}</span></p>
                                    </>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;