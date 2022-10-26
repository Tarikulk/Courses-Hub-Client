import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className='mt-4'>
            {
                courses.map(course => <Link to={`/course/${course.id}`} key={course.id}>
                <p><Button>{course.name}</Button></p>
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;