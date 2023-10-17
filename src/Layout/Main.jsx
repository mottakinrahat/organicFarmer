import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const pathsToHideNavbar = ['/login', '/register','/updateProfile','/update'];
    const shouldHideNavbar = pathsToHideNavbar.some((path) =>
    location.pathname.startsWith(path)
);

    const pathsToHideFooter = ['/contact', '/profile','/update','/ourFarms'];
    const shouldHideFooter = pathsToHideFooter.some((path) =>
        location.pathname.startsWith(path)
    );
    return (
        <div className='bg-[#E8F0CA] pt-2'>
            {!shouldHideNavbar && <Navbar />}
            <Outlet />
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default Main;
