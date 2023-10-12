import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';


const UpdateProfile = () => {
    const navigate = useNavigate()
    const userData = useLoaderData();
    const { user, updateUserData } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = 'https://api.imgbb.com/1/upload?key=fd51fa12e105fd973cf18f51fb6659de';
    const onSubmit = (data) => {
        console.log(data);

        // Check if a new image has been selected for upload
        if (data.image[0]) {
            // If a new image is selected, upload it
            const formData = new FormData();
            formData.append('image', data.image[0]);
            fetch(img_hosting_url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageResponse => {
                    if (imageResponse.success) {
                        const imageUrl = imageResponse.data.display_url;

                        // Update user data with the new image URL
                        updateUserData(data.nameOf, imageUrl);

                        const { nameOfBusiness, DateOfFoundation, TurnOver, areaOfFarm, location,
                            nameOf, state_name, number, amount, unit } = data;

                        const personalInfoUpdated = {
                            nameOfBusiness, DateOfFoundation, TurnOver, areaOfFarm, location,
                            nameOf, state_name, image: imageUrl, email: user?.email, number, amount, unit
                        }

                        // Update user data with new fields and image URL
                        fetch(`https://organic-farmers-server.vercel.app/personalInfo/${userData._id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(personalInfoUpdated)
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.modifiedCount > 0) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Data Updated successfully',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                    navigate(-1)
                                }
                            });
                    }
                });
        } else {
            // If no new image is selected, update user data without changing the image
            const { nameOfBusiness, DateOfFoundation, TurnOver, areaOfFarm, location,
                nameOf, state_name, number, amount, unit } = data;

            const personalInfoUpdated = {
                nameOfBusiness, DateOfFoundation, TurnOver, areaOfFarm, location,
                nameOf, state_name, email: user?.email, number, amount, unit
            }

            // Update user data without changing the image
            fetch(`https://organic-farmers-server.vercel.app/personalInfo/${userData._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(personalInfoUpdated)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Data Updated successfully',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        navigate(-1)
                    }
                });
        }
    }


    return (
        <div className=' bg-[#E8F0CA] h-full w-full pt-1 pb-10'>
            <div className='md:w-[611px] mx-4 sm:mx-4 pt-2 md:mx-auto'>
                <h2 className='text-2xl font-bold text-center mt-4 mb-4 '>Update Your Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-[#FBFFED] md:w-[690px] w-auto p-10 mb-10 rounded-xl md:mt-20 ' >
                    <div className=''>
                        <div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="file" placeholder="imageUrl" {...register("image")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Name</span>
                                </label>
                                <input type="text" defaultValue={userData?.nameOf} placeholder="Name" {...register("nameOf")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email_id</span>
                                </label>
                                <input type="email" value={user?.email} placeholder="email" {...register("email")} className="input border-2 border-[#252525]  rounded-full bg-[#E8F0CA]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name of Business</span>
                                </label>
                                <input type="text" defaultValue={userData?.nameOfBusiness} {...register("nameOfBusiness")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" defaultValue={userData?.number} placeholder="Phone Number" {...register("number")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Foundation</span>
                                </label>
                                <input type="date" defaultValue={userData?.DateOfFoundation} {...register("DateOfFoundation")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" required />

                            </div>

                            <div className='md:flex  items-center gap-6'>
                                <div className="form-control md:w-9/12">
                                    <label className="label">
                                        <span className="label-text">Turnover(yearly)</span>
                                    </label>
                                    <input type="text" defaultValue={userData?.TurnOver}{...register("TurnOver")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Turnover(amount)</span>
                                    </label>
                                    <select defaultValue={userData?.amount} {...register("amount")} className="select select-bordered bg-[#E8F0CA]   ">
                                        <option disabled selected>{userData?.amount}</option>
                                        <option>Thousand</option>
                                        <option>Lakh</option>
                                        <option>Crore</option>
                                    </select>
                                </div>
                            </div>
                            <div className='md:flex items-center gap-6'>
                                <div className="form-control md:w-9/12">
                                    <label className="label">
                                        <span className="label-text">Area of Farm(only for farmers)</span>
                                    </label>
                                    <input type="text" defaultValue={userData?.areaOfFarm} {...register("areaOfFarm")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Unit of area</span>
                                    </label>
                                    <select {...register("unit")} className="select select-bordered bg-[#E8F0CA]  w-full max-w-xs">
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
                                <input type="text" defaultValue={userData?.location} {...register("location")} className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">States Location</span>
                                </label>
                                <select {...register("state_name")} className="select w-full border-2  border-[#252525] rounded-full bg-[#E8F0CA]">
                                    <option disabled selected>{userData?.state_name}</option>
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
                        </div>
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