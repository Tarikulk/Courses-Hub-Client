import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import './Home.css'

const Home = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
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