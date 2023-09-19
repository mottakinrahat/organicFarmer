import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProviders/AuthProviders';
import Swal from 'sweetalert2'
const Crops = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/personalInfo')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])

    const handleSubmitCrops = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const ProductImage = form.image.value;
        const quantity = form.quantity.value;
        const unit = form.unit.value;
        const price = form.price.value;
        const amount = form.amount.value;
        const Variety = form.variety.value;
        const findedData = arrayData.find(users => users.email === user?.email)
        const { location, number } = findedData;


        const cropsData = { productName, ProductImage, quantity, unit, price,amount, Variety, email: user?.email, name: user?.displayName, number, location }
        console.log(cropsData);
        fetch('http://localhost:5000/crops', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cropsData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'crops added successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate('/dashboard/farmers')

                }
            });
    }
    return (
        <div className='md:mx-[100px]'>
            <h2 className='text-[32px] font-semibold '>Upload Your Crops</h2>



            <div className='md:flex justify-evenly items-center gap-2'>
                <div>
                    <div className='md:w-[611px] bg-[#E8F0CA] md:px-[32px] md:py-[32px] px-4 py-4  rounded-xl'>

                        <h2 className='text-[24px] font-semibold mb-[24px]'>Listing Details</h2>
                        <form onSubmit={handleSubmitCrops}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name='name' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image URL</span>
                                </label>
                                <input type="text" name='image' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className='flex item-center gap-4'>
                                <div className="form-control w-9/12">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                                </div>
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Unit</span>
                                    </label>
                                    <select name="unit" className="select select-bordered  bg-[#FBFFED] w-full max-w-xs">
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
                                    <input type="text" name='price' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <select name='amount' className="select select-bordered  bg-[#FBFFED]  w-full max-w-xs">
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
                                <input type="text" name='variety' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

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