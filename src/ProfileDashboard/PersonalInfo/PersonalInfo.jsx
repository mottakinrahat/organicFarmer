import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProviders/AuthProviders';

const PersonalInfo = () => {
    const { user, updateUserData } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleUserProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        console.log(firstName, lastName, image, phoneNumber, location);
        updateUserData(firstName, lastName, image, phoneNumber, location)
          navigate('/profileDashboard/businessDetails')  


    }


    return (
        <div className='mx-[200px]'>
            <h2 className='text-[32px] font-semibold '>Personal Information</h2>

            <div className='w-[550px]'>
                <form onSubmit={handleUserProfile} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="imageUrl" name="image" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className='flex justify-between items-center'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="firstName" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email_id</span>
                        </label>
                        <input type="email" value={user?.email} placeholder="email" name="email" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Phone Number" name="phoneNumber" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="Location" name="location" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control text-center mt-6">
                        <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Next</button>
                    </div>


                </form>

            </div>
            <div>
            </div>
        </div>
    );
};
export default PersonalInfo;