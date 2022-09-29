import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Questions from '../Questions/Questions';
import SideBar from '../SideBar/SideBar';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleClick = () => {
        // const sum = 0;
        // setDuration(sum = sum + duration + (courses.time))
        console.log('test');

    }
    return (
        <div className='container'>
            <div className='course-container'>
                <div className='courses bg-slate-200'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            handleClick={handleClick}
                            course={course}></Course>)
                    }
                </div>
                <div className=' bg-slate-200'>
                    <Questions></Questions>
                </div>
            </div>
            <div className='side-container'>
                <SideBar></SideBar>
            </div>


        </div>
    );
};

export default Courses;