import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = '03e220e09aa6823a98ec71447d2588c8';

    /**
     * 3 ways to store images
     * 1. Third party // Free open public storage is ok for practice project
     * 2. your own storage in your own server
     * 3. Database: Mongodb
     * 
     * YUM: to validate file, search: yup file validation for react hook form
    */
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    // send to mongodb
                    fetch(`http://localhost:5000/doctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor successfully added')
                                reset()
                            }
                            else {
                                toast.error('failed to add')
                            }
                        })
                }
                // console.log('resultt', result)
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name input */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },

                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}

                    </label>
                </div>
                {/* Email input */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}

                    </label>
                </div>
                {/* Speciality input */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register('speciality')} className="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                    <label className="label"></label>
                </div>
                {/* Image input */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image?.message}</span>}

                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddDoctor;