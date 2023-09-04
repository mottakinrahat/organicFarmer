import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbars from '../../component/Navbars/Navbars';
const  ProfileDashboard = () => {
    return (
 <div>
<Navbars/>

    <div className='bg-[#FBFFED] h-full w-full '>
    
    <div className="drawer lg:drawer-open px-[70px] py-[40px] mr-10 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet/>
    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[240px] min-h-full pt-[20px] text-[18px] font-bold text-base-content">
                        {/* Sidebar content here */}
                        <li className='mb-6'>
                            <NavLink
                                to='personalInfo'
                                className={({ isActive }) => (isActive ? 'underline  w-full' : 'default')}
                            >
                                Personal Information
                            </NavLink>
                        </li>
                        <li  className='mb-6'>
                            <NavLink
                                to='businessDetails'
                                className={({ isActive }) => (isActive ? 'underline w-full' : 'default')}
                            >
                                Farm/Business Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='crops'
                                className={({ isActive }) => (isActive ? 'underline w-full' : 'default')}
                            >
                                Crops
                            </NavLink>
                        </li>
    
                    </ul>
    
                </div>
            </div>
            <Footer/>
    </div>
 </div>
    );
};

export default ProfileDashboard;