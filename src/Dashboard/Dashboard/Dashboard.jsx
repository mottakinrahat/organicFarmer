import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Dashboard = () => {
    return (
<div className='bg-[#FBFFED] h-full w-full '>
    
<div className="drawer lg:drawer-open px-[70px] py-[40px] mr-10 ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  bg-[#F8F2F2]">
                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[240px] min-h-full bg-[#E8F0CA] pl-10 pt-[120px] text-[18px] font-bold text-base-content">
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
        <Footer/>
</div>
    );
};

export default Dashboard;