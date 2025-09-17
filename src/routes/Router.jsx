
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';


    const router = createBrowserRouter(
        [
            {
                path:'/',
                element: <HomeLayout></HomeLayout>
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