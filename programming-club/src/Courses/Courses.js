import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
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
                <div className='courses'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}></Course>)
                    }
                </div>
            </div>
            <div className='side-container'>
                <h3>crt</h3>
            </div>



        </div>
    );
};

export default Courses;