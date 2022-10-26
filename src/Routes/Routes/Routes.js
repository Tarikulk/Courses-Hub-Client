import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Home/Auth/Login/Login";
import Register from "../../Pages/Home/Auth/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Shared/Blog/Blog";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/course-categories')
            }, 
            {
                path:"/course/:id",
                element:<Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:"/category/:id",
                element:<Category></Category>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])