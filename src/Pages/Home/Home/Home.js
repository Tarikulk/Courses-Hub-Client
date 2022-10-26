import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import './Home.css'

const Home = () => {
    const courses = useLoaderData()
    return (
        <div className='home-container'>
            {
                courses.map(course => <Course
                key={course.id}
                course={course}
                ></Course>)
            }
        </div>
    );
};

export default Home;