import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
        <div className='mx-[200px]'>
            <h2 className='text-[32px] font-semibold '>Personal Information</h2>

            <div className='flex items-center gap-6 mt-[32px]'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/ZYRRjD9/team-1.jpg" />
                    </div>
                </div>
                <div>
                    <button className='px-[16px] py-[8px] text-white bg-[#159122] rounded-full'>Change</button>
                </div>
            </div>

            <div className='w-[550px]'>
                <form className="">
                    <div className='flex items-center justify-between '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='firstName' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lastName' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email-id</span>
                        </label>
                        <input type="text" name='email' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phoneNumber' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control text-center mt-6">
                        <Link to='/profileDashboard/businessDetails'><button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Next</button></Link>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;