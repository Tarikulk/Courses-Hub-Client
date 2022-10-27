import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch('https://course-hub-server-tarikulk.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className='mt-4 '>
            {
                courses.map(course => <Link to={`/category/${course.id}`} key={course.id}>
                <p className='mt-5'><Button className='d-grid gap-2 col-12 fs-5'>{course.name}</Button></p>
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;