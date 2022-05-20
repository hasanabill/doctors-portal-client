import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoc, setDeleteDoc] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            doctors.map((doc, index) => <DoctorRow
                                key={doc._id}
                                doctor={doc}
                                index={index}
                                refetch={refetch}
                                setDeleteDoc={setDeleteDoc}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoc && <DeleteConfirmModal
                    deleteDoc={deleteDoc}
                    refetch={refetch}
                    setDeleteDoc={setDeleteDoc}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;