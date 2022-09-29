import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideContainerMiddle = () => {
    const msg = () => {
        toast.success('Congratulation!! Activity completed!!', {
            position: toast.POSITION.TOP_CENTER
        })
    }
    // const [time, setTime] = useState(0)


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

            <div className='mt-10'>
                <div>
                    <p className='font-semibold text-lg ml-1'>Work Details</p>
                </div>
                <div className='info'>
                    <div className="card bg-slate-100 p-3 m-1 text-center">
                        <div className='flex'>
                            <p className='font-bold text-xl'>Code Time</p>
                            <p className='font-light text-lg text-slate-500 ml-3'><span>0</span> hrs</p>
                        </div>
                    </div>

                    <div className="card bg-slate-100 p-3 mt-5 text-center">
                        <div className='flex'>
                            <p className='font-bold text-xl'>Break Time</p>
                            <p className='font-light text-lg text-slate-500 ml-3'><span>0</span> min</p>
                        </div>
                    </div>
                </div>
                <div className="card p-3 mt-5 text-center">
                    <button className="btn btn-primary" onClick={msg}>Activity completed</button>
                    <ToastContainer></ToastContainer>
                </div>


            </div>

        </div>
    );
};

export default SideContainerMiddle;