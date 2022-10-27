import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout";
import Login from "../../Pages/Home/Auth/Login/Login";
import Register from "../../Pages/Home/Auth/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import PremiumCourse from "../../Pages/Premium/PremiumCourse";
import Blog from "../../Pages/Shared/Blog/Blog";
import ErrorPage from "../../Pages/Shared/Error404/ErrorPage";
import FAQ from "../../Pages/Shared/FAQ/FAQ";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('https://course-hub-server-tarikulk.vercel.app/course-categories')
            },
            {
                path:"/category/:id",
                element:<Category></Category>, 
                loader: ({params}) => fetch(`https://course-hub-server-tarikulk.vercel.app/category/${params.id}`)
            },
            {
                path:"/checkout/:id",
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://course-hub-server-tarikulk.vercel.app/category/${params.id}`)
            },
            {
                path:"/premium/:id",
                element:<PremiumCourse></PremiumCourse>,
                loader: ({params}) => fetch(`https://course-hub-server-tarikulk.vercel.app/premium/${params.id}`)
            },
            {
                path:"/faq",
                element:<FAQ></FAQ>
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