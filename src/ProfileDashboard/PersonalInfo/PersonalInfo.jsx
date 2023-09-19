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
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const personalInformation = { image, firstName, phoneNumber, location }
        updateUserData(firstName, image, phoneNumber, location)
        fetch('http://localhost:5000/personalInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personalInformation)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    navigate('/profileDashboard/businessDetails')

                }
            });
    }


return (
    <div className='md:mx-[200px]'>
        <h2 className='text-[32px] font-semibold '>Personal Information</h2>

        <div className='md:w-[550px]'>
            <form onSubmit={handleUserProfile} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Image</span>
                    </label>
                    <input type="text" placeholder="imageUrl" name="image" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="Name" name="firstName" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
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