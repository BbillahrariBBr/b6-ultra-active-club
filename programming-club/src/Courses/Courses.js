import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Questions from '../Questions/Questions';
import SideBar from '../SideBar/SideBar';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='container'>
            <div className='course-container'>
                <div className='courses bg-slate-200'>
                    {
                        courses.map(course => <Course
                            key={course.id}
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