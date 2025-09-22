
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../Pages/Home';
// import Category from '../Pages/CategoryNews';
import CategoryNews from '../Pages/CategoryNews';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../layouts/AuthLayout';


    const router = createBrowserRouter(
        [
            {
                path:'/',
                element: <HomeLayout></HomeLayout>,
                children: [
                    {
                        path:"",
                        element: <Home></Home>
                    },
                    {
                        path:"/category/:id",
                        element:<CategoryNews></CategoryNews>,
                        loader:() => fetch("/public/news.json"),
                        
                    }
                ]
                
            },
            {
                path:"/home",
                element: <h1>Home</h1>
            },
            {
                path:'/auth',
                element: <AuthLayout></AuthLayout>,
                children:[
                    {
                        path:'/auth/login',
                        element:<Login></Login> 
                    },
                    {
                        path:"/auth/register",
                        element:<Register></Register>
                    }
                ]
            },
            {
                path:'*',
                element:<h3>Errorrr!</h3>

            
            }
        ]
    )
   
export default router;