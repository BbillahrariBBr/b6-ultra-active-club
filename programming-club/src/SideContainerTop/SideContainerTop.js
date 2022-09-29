import React from 'react';

const SideContainerTop = () => {
    return (
        <div>
            <div className="w-10 flex">
                <img className='rounded-full' src="https://placeimg.com/80/80/people" />
                <p className='font-semibold text-lg ml-1'>BBillah</p>
            </div>
            <div className='info'>
                <div className="card bg-slate-400 grid grid-cols-3 p-3 m-1 text-center">
                    <div >
                        <p><span className='font-bold text-xl'>52</span><sub>kg</sub></p>
                        <p className='text-sm'>Weights</p>
                    </div>
                    <div >
                        <p><span className='font-bold text-xl'>5.3</span></p>
                        <p className='text-sm'>Height</p>
                    </div>
                    <div >
                        <p><span className='font-bold text-xl'>29</span></p>
                        <p className='text-sm'>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideContainerTop;