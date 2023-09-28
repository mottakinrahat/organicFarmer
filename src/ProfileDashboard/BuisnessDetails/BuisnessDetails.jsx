import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProviders/AuthProviders';
const BuisnessDetails = () => {
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState('farmer'); // Default value for the radio button
    const navigate = useNavigate()
    const handleBuisnessDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const nameOfBusiness = form.BusinessName.value;
        const number = form.phoneNumber.value;
        const DateOfFoundation = form.dateOf.value;
        const TurnOver = form.turnover.value;
        const amount = form.amount.value;
        const areaOfFarm = form.areaFarm.value;
        const unit = form.unit.value;
        const location = form.location.value;
        const state_name = form.states.value;
        const farmBusiness = { role, nameOfBusiness, number, DateOfFoundation, TurnOver, amount, areaOfFarm, unit, location, email: user?.email, image: user?.imageURL, nameOf: user?.displayName, state_name: state_name };
        const farmerStates = { farmer_name: user?.displayName, farm_area: areaOfFarm, unit: unit, joining_year: DateOfFoundation, state_name: state_name };
        fetch('http://localhost:5000/personalInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmBusiness)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    fetch('http://localhost:5000/farmerState', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(farmerStates)
                    })
                    navigate('/profileDashboard/crops')
                }
            });

    }

    // Function to handle radio button change
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    return (
        <div className='md:mx-[400px] bg-[#FBFFED] rounded-xl p-10 mt-8'>
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

            <div className='md:w-[611px]'>
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
                        <input type="text" placeholder="Phone Number" name="phoneNumber" className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Foundation</span>
                        </label>
                        <input type="date" name='dateOf' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>

                    <div className='flex items-center gap-6'>
                        <div className="form-control w-9/12">
                            <label className="label">
                                <span className="label-text">Turnover(yearly)</span>
                            </label>
                            <input type="text" name='turnover' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Turnover(amount)</span>
                            </label>
                            <select name='amount' className="select select-bordered bg-[#E8F0CA]  w-full max-w-xs">
                                <option disabled selected>amount</option>
                                <option>Thousand</option>
                                <option>Lakh</option>
                                <option>Crore</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <div className="form-control w-9/12">
                            <label className="label">
                                <span className="label-text">Area of Farm(only for farmers)</span>
                            </label>
                            <input type="text" name='areaFarm' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Unit of area</span>
                            </label>
                            <select name="unit" className="select select-bordered bg-[#E8F0CA]  w-full max-w-xs">
                                <option disabled selected>Unit</option>
                                <option>square metres</option>
                                <option>square kilometers</option>
                                <option>hectare</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Farm Location</span>
                        </label>
                        <input type="text" name='location' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">States Location</span>
                        </label>
                        <select name='states' className="select w-full border-2  border-[#252525] rounded-full bg-[#E8F0CA]">
                            <option disabled selected>Select your states?</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </select>

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