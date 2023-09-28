import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProviders/AuthProviders';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
const Crops = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('https://organic-farmers-server.vercel.app/personalInfo')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])

    // const handleSubmitCrops = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const productName = form.name.value;
    //     const ProductImage = form.image.value;
    //     const quantity = form.quantity.value;
    //     const unit = form.unit.value;
    //     const price = form.price.value;
    //     const amount = form.amount.value;
    //     const Variety = form.variety.value;
    //     const findedData = arrayData.find(users => users.email === user?.email)
    //     const { location, number } = findedData;


    //     const cropsData = { productName, ProductImage, quantity, unit, price,amount, Variety, email: user?.email, name: user?.displayName, number, location }
    //     console.log(cropsData);
    //     fetch('https://organic-farmers-server.vercel.app/crops', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(cropsData)
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 Swal.fire({
    //                     position: 'center',
    //                     icon: 'success',
    //                     title: 'crops added successfully',
    //                     showConfirmButton: false,
    //                     timer: 2000
    //                 })
    //                 navigate('/dashboard/farmers')

    //             }
    //         });
    // }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = 'https://api.imgbb.com/1/upload?key=fd51fa12e105fd973cf18f51fb6659de';
    const onSubmit = (data) => {
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
                    const {productName, quantity,price,Variety,unit,amount} = data;
                    const cropsInfo = { productName, quantity,unit,price,amount,Variety, ProductImage: imageUrl,email:user.email,name:user.displayName}

                    fetch('https://organic-farmers-server.vercel.app/crops', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(cropsInfo)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.insertedId) {
                                navigate('/dashboard/farmers');
                            }
                        });
                }
            })

    }
    return (
        <div className='md:mx-[100px]'>

            <div className='md:flex justify-evenly items-center gap-2'>
                <div>
                    <div className='md:w-[611px] bg-[#E8F0CA] md:px-[32px] md:py-[32px] px-4 py-4 mt-8  rounded-xl'>

                    <h2 className='text-[24px] font-semibold '>Upload Your Crops</h2>
                        <form   onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" {...register("productName")} className="input border-2 border-[#252525] rounded-full bg-[#C4D290]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image URL</span>
                                </label>
                                <input type="file"  {...register("image")} className="input border-2 border-[#252525] rounded-full bg-[#C4D290]" />
                            </div>
                            <div className='flex item-center gap-4'>
                                <div className="form-control w-9/12">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" {...register("quantity")} className="input border-2 border-[#252525] rounded-full bg-[#C4D290]" />

                                </div>
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Unit</span>
                                    </label>
                                    <select {...register("unit")} className="select select-bordered  bg-[#C4D290] w-full max-w-xs">
                                        <option disabled selected>Unit</option>
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
                                    <input type="text" {...register("price")} className="input border-2 border-[#252525] rounded-full bg-[#C4D290]" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <select {...register("amount")} className="select select-bordered  bg-[#C4D290]  w-full max-w-xs">
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
                                <input type="text" {...register("Variety")} className="input border-2 border-[#252525] rounded-full bg-[#C4D290]" />

                            </div>

                            <div className="form-control text-center mt-6">
                                <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Add Crops</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crops;