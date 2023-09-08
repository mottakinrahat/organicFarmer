import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const Update = () => {
    const navigate=useNavigate();
    const updatedData = useLoaderData();
    const { ProductImage, productName, quantity, price, Variety } = updatedData;
    const handleUpdateCrops = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const ProductImage = form.image.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const Variety = form.variety.value;

        const cropsData = { productName, ProductImage, quantity, price, Variety}
        console.log(cropsData);
        fetch(`http://localhost:5000/crops/${updatedData._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cropsData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'crops Updated successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate(`/dashboard/farmers`)
                }
            });
    }
    return (
        <div className='mx-[100px] mt-[160px] mb-20'>
          



            <div className='flex justify-evenly items-center gap-2'>
                <div>
                    <div className='w-[611px] bg-[#E8F0CA] px-[32px] py-[32px] rounded-xl'>

                        <h2 className='text-[24px] text-center font-semibold mb-[24px]'>Update your Crops</h2>
                        <form onSubmit={handleUpdateCrops}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" defaultValue={productName} name='name' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image URL</span>
                                </label>
                                <input type="text" defaultValue={ProductImage} name='image' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" defaultValue={quantity} name='quantity' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={price} name='price' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Variety (Optional)</span>
                                </label>
                                <input type="text" defaultValue={Variety} name='variety' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>

                            <div className="form-control text-center mt-6">
                                <button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;