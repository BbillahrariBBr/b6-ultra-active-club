import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>Courses Component Added length {courses.length}</h1>
            {
                courses.map(course => <Course name={course.name}></Course>)
            }

        </div>
    );
};

export default Courses;