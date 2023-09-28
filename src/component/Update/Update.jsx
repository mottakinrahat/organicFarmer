import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProviders/AuthProviders';
const Update = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const updatedData = useLoaderData();
    const { ProductImage, productName, quantity, price, Variety, amount, unit } = updatedData;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = 'https://api.imgbb.com/1/upload?key=fd51fa12e105fd973cf18f51fb6659de';
    const onSubmit = (data) => {
        const formData = new FormData();

        // Check if a new image is selected
        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageUrl = imageResponse.data.display_url ? imageResponse.data.display_url : ProductImage;
                    const { productName, quantity, price, Variety, unit, amount } = data;
                    const cropsInfo = { productName, quantity, unit, price, amount, Variety, ProductImage: imageUrl };
                    console.log(cropsInfo);
                    fetch(`https://organic-farmers-server.vercel.app/crops/${updatedData._id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(cropsInfo)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Crops updated successfully',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                            }
                        });
                }
            });
    };
    return (
        <div className='mx-[100px] mt-[160px] mb-20'>




            <div className='flex justify-evenly items-center gap-2'>
                <div>
                    <div className='w-[611px] bg-[#E8F0CA] px-[32px] py-[32px] rounded-xl'>

                        <h2 className='text-[24px] text-center font-semibold mb-[24px]'>Update your Crops</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" defaultValue={productName} {...register("productName")} className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image URL</span>
                                </label>
                                <input type="file" {...register("image")} className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className='flex item-center gap-4'>
                                <div className="form-control w-9/12">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" defaultValue={quantity} {...register("quantity")} className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                                </div>
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Unit</span>
                                    </label>
                                    <select {...register("unit")} className="select select-bordered  bg-[#FBFFED] w-full max-w-xs">
                                        <option disabled selected>{unit}</option>
                                        <option>Kilograms</option>
                                        <option>Tons</option>
                                    </select>

                                </div>
                            </div>

                            <div className='flex items-center gap-6'>
                                <div className="form-control w-9/12">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" defaultValue={price} {...register("price")} className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <select {...register("amount")} className="select select-bordered  bg-[#FBFFED]  w-full max-w-xs">
                                        <option disabled selected>amount</option>
                                        <option>Per Kilogram</option>
                                        <option>Per ton</option>

                                    </select>

                                </div>
                            </div>





                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Variety (Optional)</span>
                                </label>
                                <input type="text" defaultValue={Variety} {...register("Variety")} className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>

                            <div className="form-control text-center mt-6">
                                <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Update Crops</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;