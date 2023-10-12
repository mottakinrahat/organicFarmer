import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo/Organic Farmer.png';
import { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Navbar = () => {
    const [arrayData, setArrayData] = useState([]);
    const location = useLocation();
    const pathsToHideNavbar = ['/contact/:id'];
    const shouldHideNavbar = pathsToHideNavbar.includes(location.pathname);
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        fetch(`https://organic-farmers-server.vercel.app/personalInfo?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setArrayData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [user?.email]);
    return (
        <div className='md:w-[1280px] mx-auto sticky  sm:-mb-[80px] md:-mb-[100px]'>
            <div className={'py-5 mx-auto sm:max-w-xl sm:rounded-full md:rounded-full  md:h-[70px] md:mt-4 md:max-w-full md:px-24 lg:px-8 bg-[#FBFFED] text-black'}>
                <div className='relative flex md:justify-between md:items-center md:px-[10px]  '>

                    <div className='md:flex justify-between items-center md:gap-[60px]'><Link to='/' className='inline-flex items-center'>

                        <img className='ml-10 sm:ml-5' src={logo} alt="" />
                    </Link>


                        <ul className=' hidden md:space-x-8 text-[16px] lg:flex'>
                            {!user && <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    About Us
                                </NavLink>
                            </li>}
                            {!user && <li>
                                <NavLink
                                    to='/products'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Products
                                </NavLink>
                            </li>}
                            <li>
                                <NavLink
                                    to='/ourFarms'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    OurFarms
                                </NavLink>
                            </li>
                            {!user && <li>
                                <NavLink
                                    to='/community'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Community
                                </NavLink>
                            </li>}
                            {user && <li>
                                <NavLink
                                    to='/dashboard/farmers'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Our Community
                                </NavLink>
                            </li>}

                        </ul></div>
                    <div className='md:flex justify-end gap-2 items-center hidden'>

                        <div>
                            {arrayData && arrayData.length > 0 ? (
                                <Link to={`/profile/${arrayData[0]?._id || 'default'}`}>
                                    {user && <div className='flex items-center border-2 border-[#159122] rounded-full gap-2 px-2 py-1 cursor-pointer'>
                                        {user?.photoURL && <img src={user?.photoURL} className='h-6 w-6 rounded-full' alt="" />}
                                        <h2>{user?.displayName}</h2>
                                    </div>}
                                </Link>
                            ) : (
                                <Link to='/default-profile'>
                                    {user && <div className='flex items-center border-2 border-[#159122] rounded-full px-2 cursor-pointer'>
                                        {user?.photoURL && <img src={user?.photoURL} className='h-8 w-8 rounded-full' alt="" />}
                                        <h2>{user?.displayName}</h2>
                                    </div>}
                                </Link>
                            )}
                        </div>
                        {user ? <button onClick={handleLogOut} className='md:py-[4px] hover:bg-[#29692F] hover:text-white transition duration-300 ease-in-out  md:px-[24px] border-2 border-[#159122] text-[16px] rounded-xl text-[#159122]'>Logout</button> : <Link to='/login'>
                            <button className='md:py-[4px] hover:bg-[#29692F] hover:text-white transition duration-300 ease-in-out  md:px-[24px] border-2 border-[#159122] text-[16px] rounded-xl text-[#159122]'>Login</button></Link>}


                    </div>
                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-8  ml-[80px] sm:ml-80 text-black' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>

                                                <span className='ml-2 text-xl font-bold  text-gray-800 uppercase'>
                                                    <img className='ml-2 sm:ml-2 h-4' src={logo} alt="" />
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            {arrayData && arrayData.length > 0 ? (
                                                <Link to={`/profile/${arrayData[0]?._id || 'default'}`}>
                                                    {user && <div className='flex items-center border-2 border-[#159122] rounded-full gap-2 px-2 py-1 cursor-pointer'>
                                                        {user?.photoURL && <img src={user?.photoURL} className='h-6 w-6 rounded-full' alt="" />}
                                                        <h2>{user?.displayName}</h2>
                                                    </div>}
                                                </Link>
                                            ) : (
                                                <Link to='/default-profile'>
                                                    {user && <div className='flex items-center border-2 border-[#159122] rounded-full px-2 cursor-pointer'>
                                                        {user?.photoURL && <img src={user?.photoURL} className='h-8 w-8 rounded-full' alt="" />}
                                                        <h2>{user?.displayName}</h2>
                                                    </div>}
                                                </Link>
                                            )}
                                        </div>
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
                                            {!user && <li>
                                                <NavLink
                                                    to='/about'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    About Us
                                                </NavLink>
                                            </li>}
                                            {!user && <li>
                                                <NavLink
                                                    to='/products'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Products
                                                </NavLink>
                                            </li>}
                                            <li>
                                                <NavLink
                                                    to='/ourFarms'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    OurFarms
                                                </NavLink>
                                            </li>
                                            {!user && <li>
                                                <NavLink
                                                    to='/community'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Community
                                                </NavLink>
                                            </li>}
                                            {user && <li>
                                                <NavLink
                                                    to='/dashboard/farmers'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Our Community
                                                </NavLink>
                                            </li>}
                                        </ul>
                                        <div className='flex justify-evenly itemc gap-0 mt-2 '>

                                            <Link to=''><button className='md:py-[6px] py-2  px-[24px]  bg-[#159122] text-[16px] rounded-xl text-white  '>Join Our Community</button></Link>
                                            {user ? <button onClick={handleLogOut} className='md:py-[4px] hover:bg-[#29692F] hover:text-white transition duration-300 ease-in-out py-2 px-[24px] border-2 border-[#159122] text-[16px] rounded-xl text-[#159122]'>Logout</button> : <Link to='/login'>
                                                <button className='md:py-[4px] py-2  px-[24px] border-2 hover:bg-[#29692F] hover:text-white transition duration-300 ease-in-out border-[#159122] text-[16px] rounded-xl text-[#159122]'>Login</button></Link>}

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