import React from 'react';
import './Course.css'

const Course = (props) => {
    // console.log(props);
    const { course, handleclick } = props
    const { name, disc, img, time, duration } = course;
    return (
        <div className='course'>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img className='h-24 w-full' src={img} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{disc.slice(0, 100)}</p>
                    <p className='font-semibold text-lg'>Course Duration: {duration} hrs</p>
                    <p className='font-semibold text-lg'>Time required: {time} hrs</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleclick} className="btn btn-primary">Add to list</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;