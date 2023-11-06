import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import Navbars from '../../component/Navbars/Navbars';
import { FaAlignJustify } from "react-icons/fa";

const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // const toggleDrawer = () => {
    //     setIsDrawerOpen(!isDrawerOpen);
    // };
    return (
        <div>
         <div className='bg-[#E8F0CA] pt-2'>
           <Navbars />
            <div className=' h-full w-full '>

                <div className={`drawer lg:drawer-open  md:px-[70px] md:py-[40px] md:mr-10 `}>
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={isDrawerOpen}/>
                    <div className="drawer-content   bg-[#FBFFED]  rounded-r-xl">
                        <label htmlFor="my-drawer-2" className="btn bg-[#0C6315] drawer-button mt-4 ml-40 lg:hidden " onClick={()=>setIsDrawerOpen(!isDrawerOpen)}><FaAlignJustify className='text-white'></FaAlignJustify></label>
                        <Outlet />


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="md:drawer-overlay"></label>
                        <ul className="menu p-4 md:w-80 min-h-full rounded-l-xl bg-[#FBFFED] md:pl-10 pt-[120px] text-[18px] font-bold text-base-content">
                            {/* Sidebar content here */}
                            <li className=''>
                                <NavLink
                                    to='farmers'onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
                                    className={({ isActive }) => (isActive ? 'bg-[#0C6315] text-white w-full' : 'default')}
                                >
                                    Farmers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='traders' onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
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
       </div>
    );
};

export default Dashboard;