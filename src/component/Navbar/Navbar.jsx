import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo/Organic Farmer.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' md:w-[1280px]   mx-auto  sticky md:-mb-[100px]   '>
            <div className='  py-5  mx-auto sm:max-w-xl rounded-full  md:h-[70px] md:mt-4 md:max-w-full md:px-24 lg:px-8 bg-[#FBFFED] text-black'>
                <div className='relative flex md:justify-between md:items-center md:px-[10px]  '>

                    <div className='flex justify-between items-center md:gap-[60px]'><Link to='/' className='inline-flex items-center'>

                        <img className='' src={logo} alt="" />
                    </Link>


                        <ul className=' hidden md:space-x-8 text-[16px] lg:flex'>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/product'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/community'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Community
                                </NavLink>
                            </li>
                           
                        </ul></div>
                    <div className='md:flex justify-end gap-2 items-center hidden'>
                    <button className='md:py-[6px]  md:px-[24px]  bg-[#159122] text-[16px] rounded-xl text-white  '>Join Our Community</button>
                    <button className='md:py-[4px]  md:px-[24px] border-2 border-[#159122] text-[16px] rounded-xl text-[#159122]  '>Login</button>
                        

                    </div>
                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-8  ml-[180px] text-white' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>

                                                <span className='ml-2 text-xl font-bold  text-gray-800 uppercase'>
                                                    FarmsBook
                                                </span>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <NavLink
                                                    to='/aboutUs'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    About Us
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/buyersConnect'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Buyers Connect
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/harvestManagement'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Harvest Management
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/demandForecast'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Demand Forecast
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className='flex justify-center gap-2 mt-2 '>

                                            <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[8px] px-4 border-2 border-black rounded-full hover:bg-white hover:text-black hover:duration-500 hover:shadow-xl'>Download App</button></Link>
                                            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'><button className='md:px-[16px] md:py-[8px] px-4 border-2 border-black text-white bg-black rounded-full flex gap-1'><img className='h-[24px] w-[23.92px]  hover:bg-slate-500 hover:text-white duration-500  hover:border-slate-500' src={whatsapp} alt="" />Join Us</button></Link>

                                        </div>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;