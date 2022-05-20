import React from 'react';

const DoctorRow = ({ doctor, index, setDeleteDoc }) => {
    const { name, speciality, img } = doctor;



    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeleteDoc(doctor)} htmlFor="delete-confirm-modal" className="btn btn-error btn-outline btn-sm">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;