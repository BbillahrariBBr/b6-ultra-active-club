import React from 'react';

const Course = (props) => {
    console.log(props);
    const { name, disc, img, time, duration } = props.course;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{disc}</p>
            <h4>{duration}</h4>
            <h4>{time}</h4>
        </div>
    );
};

export default Course;