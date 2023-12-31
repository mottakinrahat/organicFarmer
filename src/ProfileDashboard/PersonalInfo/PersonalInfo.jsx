import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProviders/AuthProviders';
import { useForm } from 'react-hook-form';

const PersonalInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const { user, updateUserData } = useContext(AuthContext)
    const img_hosting_url = 'https://api.imgbb.com/1/upload?key=fd51fa12e105fd973cf18f51fb6659de';

    const navigate = useNavigate()

    const onSubmit = (data) => {
        const formData = new FormData();
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0]);
            fetch(img_hosting_url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageResponse => {
                    if (imageResponse.success) {
                        const imageUrl = imageResponse.data.display_url;
                        const { email, phoneNumber, location, firstName } = data;
                        const personalInformation = { email, phoneNumber, location, firstName, image: imageUrl }
                        updateUserData(firstName, imageUrl, phoneNumber, location);

                        fetch('https://organic-farmers-server.vercel.app/userData', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(personalInformation)
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.insertedId) {
                                    navigate('/profileDashboard/businessDetails');
                                }
                            });
                    }
                });
        } else {
            const { email, phoneNumber, location, firstName } = data;
            const personalInformation = { email, phoneNumber, location, firstName,image:user?.photoURL}

            fetch('https://organic-farmers-server.vercel.app/userData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(personalInformation)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        navigate('/profileDashboard/businessDetails');
                    }
                });
        }
    }

    return (
        <div className='md:mx-[500px] lg:mx-[500px]  mt-10'>
            <div className='md:w-auto w-[340px]'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-[#FBFFED]  rounded-xl">
                    <h2 className='text-[24px] font-semibold '>Personal Information</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Image</span>
                        </label>
                        <input type="file" placeholder="imageUrl"  {...register("image")} className="input input-bordered rounded-full bg-[#E8F0CA]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Name"  {...register("firstName")} className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email_id</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            defaultValue={user?.email}
                            {...register("email")}
                            className="input input-bordered rounded-full bg-[#E8F0CA]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="phoneNumber"
                            id="phoneNumber"
                            {...register("phoneNumber")}
                            className="input input-bordered rounded-full bg-[#E8F0CA]"
                            placeholder="Enter your phone Number"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="Location" {...register("location")} className="input input-bordered rounded-full bg-[#E8F0CA]" required />
                    </div>
                    <div className="form-control text-center mt-6">
                        <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Next</button>
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    );
};

export default PersonalInfo;
