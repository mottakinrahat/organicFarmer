import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbars from '../../component/Navbars/Navbars';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the checkmark icon
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const ProfileDashboard = () => {
    const [activeStep, setActiveStep] = useState(0);
    const location = useLocation();
    // Define the steps for the stepper
    const steps = ['Personal Information', 'Farm/Business Details', 'Crops'];
    useEffect(() => {
        // Determine the active step based on the current route
        if (location.pathname.includes('businessDetails')) {
            setActiveStep(1);
        } else if (location.pathname.includes('crops')) {
            setActiveStep(2);
        } else {
            setActiveStep(0); // Default to the first step
        }
    }, [location.pathname]);
    const CustomStepIcon = ({ active, completed }) => {
        if (completed) {
            // Display a green checkmark icon when the step is completed
            return <CheckCircleIcon style={{ color: 'green', border: '1px solid green',borderRadius:'50px'}} />;
        } else {
            // Display a red circle icon for other steps
            return <FiberManualRecordIcon style={{ color: '#FBFFED',border: '1px solid green',borderRadius:'50px' }} />;
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <Navbars />

            <div className='bg-[#C4D290] h-full w-full '>
                <div className="drawer lg:drawer-open px-[70px] py-[40px] mr-10 ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <Stepper activeStep={activeStep} alternativeLabel className="w-auto sm:w-auto md:w-auto sm:mt-20">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Outlet />

                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-[240px] min-h-full pt-[20px] text-[18px] md:hidden font-bold text-base-content">
                            {/* Sidebar content here */}
                            <li className='mb-6'>
                                <NavLink
                                    to='personalInfo'
                                    className={({ isActive }) => (isActive ? 'underline  w-full' : 'default')}
                                >
                                    Personal Information
                                </NavLink>
                            </li>
                            <li className='mb-6'>
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
                <Footer />
            </div>
        </div>
    );
};

export default ProfileDashboard;
