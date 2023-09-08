import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const pathsToHideNavbar = ['/login', '/register'];
    const shouldHideNavbar = pathsToHideNavbar.includes(location.pathname);

    return (
        <div className='bg-[#FBFFED]'>
            {!shouldHideNavbar && <Navbar />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
