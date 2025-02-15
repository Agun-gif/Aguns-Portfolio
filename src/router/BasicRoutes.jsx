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
import BlogDetails1 from '../pages/client/blog/blogcomponents/BlogDetails1.jsx';
import BlogDetails2 from '../pages/client/blog/blogcomponents/BlogDetails2.jsx';
import BlogDetails3 from '../pages/client/blog/blogcomponents/BlogDetails3.jsx';
import BlogDetails4 from '../pages/client/blog/blogcomponents/BlogDetails4.jsx';
import BlogDetails5 from '../pages/client/blog/blogcomponents/BlogDetails5.jsx';
import BlogDetails6 from '../pages/client/blog/blogcomponents/BlogDetails6.jsx';
import Pricing from '../pages/client/pricing/pricingcomponents/Pricing.jsx';
import About from '../pages/client/about/aboutcomponents/About.jsx';
import Contact from '../pages/client/contactus/contact.jsx';











const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {path: "HomePage", element: <HomePage/> },
            {path: "Service", element: <Service/> },
            {path: "Work", element: <Work/> },
            {path: "WorkDetails1", element: <WorkDetails1/> },
            {path: "WorkDetails2", element: <WorkDetails2/> },
            {path: "WorkDetails3", element: <WorkDetails3/> },
            {path: "WorkDetails4", element: <WorkDetails4/> },
            {path: "Blog", element: <Blog/> },
            {path: "BlogDetails1", element: <BlogDetails1/> },
            {path: "BlogDetails2", element: <BlogDetails2/> },
            {path: "BlogDetails3", element: <BlogDetails3/> },
            {path: "BlogDetails4", element: <BlogDetails4/> },
            {path: "BlogDetails5", element: <BlogDetails5/> },
            {path: "BlogDetails6", element: <BlogDetails6/> },
            {path: "Pricing", element: <Pricing/> },
            {path: "About", element: <About/> },
            {path: "Contact", element: <Contact/> },
           
            
            
           
            
        ],
    },
]);



export default router;
