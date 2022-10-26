import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PremiumCategory from './PremiumCategory';
import "./PremiumCourse.css"

const PremiumCourses = () => {
    const premiumCourses = useLoaderData();
    console.log(premiumCourses)
    return (
        <div className='premium-course-container'>
            {
                premiumCourses.map(premium => <PremiumCategory
                key={premium._id}
                premium={premium}
                ></PremiumCategory>)
            }
        </div>
    );
};

export default PremiumCourses;