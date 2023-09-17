import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProviders/AuthProviders';
const BuisnessDetails = () => {
   const{user}=useContext(AuthContext)
    const [role, setRole] = useState('farmer'); // Default value for the radio button
  const navigate=useNavigate()
    const handleBuisnessDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const nameOfBusiness = form.BusinessName.value;
        const number =form.phoneNumber.value;
        const DateOfFoundation = form.dateOf.value;
        const TurnOver = form.turnover.value;
        const areaOfFarm = form.areaFarm.value;
        const location = form.location.value;

        const farmBusiness = { role, nameOfBusiness, number, DateOfFoundation, TurnOver, areaOfFarm, location,email:user?.email,photo:user?.photoURL,nameOf:user?.displayName};
        fetch('https://organic-farmers-server.vercel.app/personalInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmBusiness)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    navigate('/profileDashboard/crops')
                }
            });
    }

    // Function to handle radio button change
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    return (
        <div className='mx-[200px]'>
            <h2 className='text-[32px] font-semibold '>Farm/Business Details</h2>

            <fieldset className='flex  mb-[16px] md:gap-[113px] gap-5 mt-[24px] text-black'>

                <div>
                    <input
                        id="farmer"
                        className="peer/trader mr-2"
                        type="radio"
                        name="status"
                        value="farmer" // Set the value for the farmer radio button
                        checked={role === 'farmer'} // Check if role is 'farmer' to determine the checked state
                        onChange={handleRoleChange} // Handle radio button change
                    />
                    <label htmlFor="farmer">Farmer</label>
                </div>

                <div>
                    <input
                        id="business"
                        className="peer/business mr-2"
                        type="radio"
                        name="status"
                        value="business" // Set the value for the business radio button
                        checked={role === 'business'} // Check if role is 'business' to determine the checked state
                        onChange={handleRoleChange} // Handle radio button change
                    />
                    <label htmlFor="business">Business/individual</label>
                </div>

            </fieldset>

            <div className='w-[611px]'>
                <form onSubmit={handleBuisnessDetails} className="">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name of Business</span>
                        </label>
                        <input type="text" name='BusinessName' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Phone Number" name="phoneNumber" className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Foundation</span>
                        </label>
                        <input type="date" name='dateOf' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Turnover(yearly)</span>
                        </label>
                        <input type="text" name='turnover' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Area of Farm(only for farmers)</span>
                        </label>
                        <input type="text" name='areaFarm' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control text-center mt-6">
                        <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Next</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default BuisnessDetails;