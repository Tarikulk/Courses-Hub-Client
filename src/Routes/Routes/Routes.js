import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>  
            }, 
            {
                path:"/course/:id",
                element:<Courses></Courses>
            },
            {
                path:"/category/:id",
                element:<Category></Category>
            }
        ]
    }
])