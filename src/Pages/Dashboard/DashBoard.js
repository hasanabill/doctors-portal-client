import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useAdmin from './../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-primary'>Welcome to YourDashBoard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appoinment</Link></li>
                    <li><Link to='/dashboard/myreview'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All users</Link></li>
                        <li><Link to='/dashboard/doctors'>Add Doctors</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;