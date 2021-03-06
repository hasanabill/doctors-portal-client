import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteDoc, refetch, setDeleteDoc }) => {
    const { name, email } = deleteDoc;
    const handleDelete = () => {
        fetch(`https://fathomless-hamlet-23429.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success('Deleted')
                    setDeleteDoc(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!?</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-error btn-outline btn-sm">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-error btn-outline btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;