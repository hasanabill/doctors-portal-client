import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem deserunt, veniam ullam quam et minima!</p>
                <div className="card-actions justify-around items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl'>{review.name}</h3>
                        <h3 className='text-xl'>{review.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;