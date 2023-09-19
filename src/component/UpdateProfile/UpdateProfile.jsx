import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateProfile = () => {
    const navigate = useNavigate()
    const userData = useLoaderData();
    const { user, updateUserData } = useContext(AuthContext)
    const UpdateBuisnessDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const photo = form.image.value;
        const nameOfBusiness = form.BusinessName.value;
        const number = form.phoneNumber.value;
        const DateOfFoundation = form.dateOf.value;
        const TurnOver = form.turnover.value;
        const amount = form.amount.value;
        const areaOfFarm = form.areaFarm.value;
        const unit = form.unit.value;
        const location = form.location.value;
        updateUserData(firstName,photo)
        const farmBusiness = {nameOf:firstName,photo:photo,nameOfBusiness, number, DateOfFoundation, TurnOver,amount, areaOfFarm,unit, location, email: user?.email};

        fetch(`http://localhost:5000/personalInfo/${userData._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmBusiness)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'crops Updated successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            });
    }

    return (
        <div className='mt-40 mb-20'>
            <div className='w-[611px] mx-auto'>
                <form onSubmit={UpdateBuisnessDetails} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" defaultValue={userData?.photo} placeholder="imageUrl" name="image" className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" required />
                    </div>
                   

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" defaultValue={userData?.nameOf} placeholder="Name" name="firstName" className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                        </div>
                      
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email_id</span>
                        </label>
                        <input type="email" value={user?.email} placeholder="email" name="email" className="input border-2 border-[#252525]  rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name of Business</span>
                        </label>
                        <input type="text" defaultValue={userData?.nameOfBusiness} name='BusinessName' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" defaultValue={userData?.number} placeholder="Phone Number" name="phoneNumber" className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Foundation</span>
                        </label>
                        <input type="date" defaultValue={userData?.DateOfFoundation} name='dateOf' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>

                    <div className='flex items-center gap-6'>
                        <div className="form-control w-9/12">
                            <label className="label">
                                <span className="label-text">Turnover(yearly)</span>
                            </label>
                            <input type="text" defaultValue={userData?.TurnOver} name='turnover' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Turnover(amount)</span>
                            </label>
                            <select defaultValue={userData?.amount} name='amount' className="select select-bordered bg-[#E8F0CA]  w-full max-w-xs">
                                <option disabled selected>{userData?.amount}</option>
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
                            <input type="text" defaultValue={userData?.areaOfFarm} name='areaFarm' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Unit of area</span>
                            </label>
                            <select name="unit"  className="select select-bordered bg-[#E8F0CA]  w-full max-w-xs">
                                <option disabled selected>{userData?.unit}</option>
                                <option>square metres</option>
                                <option>square kilometers</option>
                                <option>hectare</option>
                            </select>

                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" defaultValue={userData?.location} name='location' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control text-center mt-6">
                        <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Update</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;