import React from 'react';
import { Link } from 'react-router-dom';

const BuisnessDetails = () => {
    return (
        <div className='mx-[200px]'>
            <h2 className='text-[32px] font-semibold '>Farm/Business Details</h2>


            <fieldset className='flex  mb-[16px] md:gap-[113px] gap-5 mt-[24px] text-black'>

                <div>
                    <input id="farmer" className="peer/trader mr-2" type="radio" name="status" checked />
                    <label for="farmer" >Farmer</label>

                </div>

                <div>
                    <input id="business" className="peer/business mr-2" type="radio" name="status" />
                    <label for="business" >Business/individual</label>
                </div>

            </fieldset>

            <div className='w-[611px]'>
                <form className="">
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='firstName' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lastName' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                        </div>
                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email-id</span>
                        </label>
                        <input type="text" name='email' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phoneNumber' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' className="input border-2 border-[#252525] rounded-full bg-[#E8F0CA]" />

                    </div>
                    <div className="form-control text-center mt-6">
                        <Link to='/profileDashboard/crops'><button className="btn bg-[#159122] px-[61px] py-[16px] text-white  rounded-xl">Next</button></Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BuisnessDetails;