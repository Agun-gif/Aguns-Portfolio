import React from 'react';
import MainNavbar from '../components/MainNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div>
      <MainNavbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
}

export default MainLayout;
