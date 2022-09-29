import React from 'react';

const SideContainerMiddle = () => {
    return (
        <div className='mt-8'>
            <div>
                <p className='font-semibold text-lg ml-1'>Add A Break</p>
            </div>
            <div className='info'>
                <div className="card bg-slate-100 grid grid-cols-4 p-3 m-1 text-center">
                    <div >
                        <button className='btn btn-circle'><span className='font-bold text-xl'>5</span><sub>m</sub></button>
                    </div>
                    <div >
                        <button className='btn btn-circle'><span className='font-bold text-xl'>10</span><sub>m</sub></button>
                    </div>
                    <div >
                        <button className='btn btn-circle'><span className='font-bold text-xl'>25</span><sub>m</sub></button>
                    </div>
                    <div >
                        <button className='btn btn-circle'><span className='font-bold text-xl'>25</span><sub>m</sub></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideContainerMiddle;