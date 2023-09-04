import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='flex justify-evenly  bg-[#FBFFED]'>
                <div className='w-1/2 grid grid-cols-2 gap-6 px-4 py-[34px]'>
                    <img src="https://i.ibb.co/zF94fnS/who-s-denilo-xj7-HV0-Fv-Sg0-unsplash.jpg" className='rounded-xl w-[254px] h-[312px] ml-8 object-cover' alt="" />
                    <img src="https://i.ibb.co/MDv8SYk/rajat-sarki-AOhc-R6l-KQM-unsplash.jpg" className='rounded-xl w-[234px] h-[219px] object-cover' alt="" />
                    <img src="https://i.ibb.co/cxZNvNc/tim-mossholder-Kx060c-Rsmt0-unsplash.jpg" className='rounded-xl w-[351px] h-[234px] object-cover' alt="" />
                    <img src="https://i.ibb.co/8xS4kZt/mae-mu-h-2jr-L9c-MU-unsplash.jpg" className='rounded-xl w-[234px] h-[278px] object-cover' alt="" />
                    <img src="https://i.ibb.co/GnDwSVZ/hopers-studio-5-Mh-BVr-X69fg-unsplash.jpg" className='rounded-xl w-[254px] h-[312px] object-cover ml-20' alt="" />
                    <img src="https://i.ibb.co/rpSrDXr/lifestyle-ecofriendly-person.jpg" className='rounded-xl w-[307px] h-[234px] object-cover' alt="" />
                </div>

                <div className='w-1/2 mt-[200px]'>
                    <h2 className='text-4xl font-bold text-center mb-4'>Registration on this</h2>

                    <div className="flex flex-col w-full border-opacity-50 px-[160px]">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <div><button className='flex items-center gap-2 text-[18px] px-[70px] py-[8px] border-2 border-black rounded-full font-bold'><img src="https://i.ibb.co/HKpFW6x/devicon-google.png" alt="" />Continue with Google</button></div>


                        </div>
                        <div className="divider">OR</div>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Image</span>
                                </label>
                                <input type="file" placeholder="email" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#159122] text-white rounded-full">Register</button>
                            </div>
                            <h2 className='mt-4'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;