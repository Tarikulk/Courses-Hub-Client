import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Home/Home/Course';
import CourseDetails from './CourseDetails';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
              {
                courses.map(course => <CourseDetails
                key={course.id}
                course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;