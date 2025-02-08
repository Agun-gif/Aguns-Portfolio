import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import HomePage from '../pages/client/homepage/homepageComponents/HomePage.jsx';
import Service from '../pages/client/services/servicescomponents/Service.jsx';
import Work from '../pages/client/work/workcomponents/Work.jsx';
import WorkDetails1 from '../pages/client/work/workcomponents/WorkDetails1.jsx';
import WorkDetails2 from '../pages/client/work/workcomponents/WorkDetails2.jsx';
import WorkDetails3 from '../pages/client/work/workcomponents/WorkDetails3.jsx';
import WorkDetails4 from '../pages/client/work/workcomponents/WorkDetails4.jsx';
import Blog from '../pages/client/blog/blogcomponents/Blog.jsx';











const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {path: "home", element: <HomePage/> },
            {path: "Service", element: <Service/> },
            {path: "Work", element: <Work/> },
            {path: "WorkDetails1", element: <WorkDetails1/> },
            {path: "WorkDetails2", element: <WorkDetails2/> },
            {path: "WorkDetails3", element: <WorkDetails3/> },
            {path: "WorkDetails4", element: <WorkDetails4/> },
            {path: "Blog", element: <Blog/> },
            
            
           
            
        ],
    },
]);



export default router;
