import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const Name = form.Name.value;
        const Email = form.Email.value;
        const Password = form.Password.value;
        const ConfirmPassword = form.ConfirmPassword.value;
        const loginData = { Name, Email, Password, ConfirmPassword }
        console.log(loginData);
        if (Password !== ConfirmPassword) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Password do not match.Please enter same password',
                showConfirmButton: false,
                timer: 2000
            })
            return;
        }

        createUser(Email, Password)
            .then(result => {
                const createdUser = result.user;
                updateUserData(Name)
                if (createdUser.email) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'user created successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate('/profileDashboard/personalInfo');
                }
            })

            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }
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
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="Name" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="Email" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="Password" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" name="ConfirmPassword" className="input input-bordered rounded-full bg-[#E8F0CA]" />
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