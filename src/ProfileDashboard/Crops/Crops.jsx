import React from 'react';
import { Link } from 'react-router-dom';

const Crops = () => {
    return (
        <div className='mx-[100px]'>
            <h2 className='text-[32px] font-semibold '>Upload Your Crops</h2>



            <div className='flex justify-evenly items-center gap-2'>
                <div>
                    <div className='w-[611px] bg-[#E8F0CA] px-[32px] py-[32px] rounded-xl'>

                        <h2 className='text-[24px] font-semibold mb-[24px]'>Listing Details</h2>
                        <form className="">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name='name' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="file" name='image' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name='quantity' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Variety (Optional)</span>
                                </label>
                                <input type="text" name='phoneNumber' className="input border-2 border-[#252525] rounded-full bg-[#FBFFED]" />

                            </div>

                            <div className="form-control text-center mt-6">
                                <Link to='/profileDashboard/crops'><button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Submit</button></Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crops;