import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props);
    const { name, disc, img, time, duration } = props.course;
    return (
        <div className='course'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-1/2 w-auto' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{disc.slice(0, 120)}</p>
                    <p className='font-semibold text-lg'>Course Duration: {duration}</p>
                    <p className='font-semibold text-lg'>Time required: {time}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;