
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../Pages/Home';
// import Category from '../Pages/CategoryNews';
import CategoryNews from '../Pages/CategoryNews';


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
                        element:<CategoryNews></CategoryNews>
                    }
                ]
                
            },
            {
                path:"/home",
                element: <h1>Home</h1>
            },
            {
                path:'/*',
                element: <h2>error</h2>
            }
        ]
    )
   
export default router;