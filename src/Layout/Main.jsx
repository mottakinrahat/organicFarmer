import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const pathsToHideNavbar = ['/login', '/register'];
    const shouldHideNavbar = pathsToHideNavbar.includes(location.pathname);

    const pathsToHideFooter = ['/contact', '/profile'];
    const shouldHideFooter = pathsToHideFooter.some((path) =>
        location.pathname.startsWith(path)
    );
    return (
        <div className='bg-[#FBFFED] pt-2'>
            {!shouldHideNavbar && <Navbar />}
            <Outlet />
          
        </div>
    );
};

export default Main;
