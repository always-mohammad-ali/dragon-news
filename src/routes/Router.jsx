
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../Pages/Home';
import Category from '../Pages/Category';


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
                        element:<Category></Category>
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