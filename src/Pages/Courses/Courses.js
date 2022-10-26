import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
             {/* {
                courses.map(course => <SingleCourse
                key={course._id}
                course={course}
                ></SingleCourse>)
             } */}
        </div>
    );
};

export default Courses;