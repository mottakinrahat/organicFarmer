import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import Navbars from '../../component/Navbars/Navbars';

const Dashboard = () => {
    return (
        <div className='bg-[#E8F0CA] pt-2'>
            <Navbars />
            <div className=' h-full w-full '>

                <div className="md:drawer lg:drawer-open md:px-[70px] md:py-[40px] md:mr-10 ">
                    <input id="md:my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content  bg-[#FBFFED] rounded-r-xl">
                        <Outlet />

                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="md:my-drawer-2" className="md:drawer-overlay"></label>
                        <ul className="menu p-4 md:w-[240px] min-h-full rounded-l-xl bg-[#FBFFED] pl-10 pt-[120px] text-[18px] font-bold text-base-content">
                            {/* Sidebar content here */}
                            <li className=''>
                                <NavLink
                                    to='farmers'
                                    className={({ isActive }) => (isActive ? 'bg-[#0C6315] text-white w-full' : 'default')}
                                >
                                    Farmers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='traders'
                                    className={({ isActive }) => (isActive ? 'bg-[#0C6315] text-white w-full' : 'default')}
                                >
                                    Traders
                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;