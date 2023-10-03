import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate('/dashboard/farmers', { replace: true });
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    const handleGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const googleLogin = result.user;
                console.log(googleLogin);
                navigate('/dashboard/farmers', { replace: true });
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div className='md:flex justify-evenly bg-[#FBFFED]'>
            <div className='md:w-1/2 grid grid-cols-2 md:gap-6 gap-4 px-4 py-[34px]'>
                
                    <img src="https://i.ibb.co/zF94fnS/who-s-denilo-xj7-HV0-Fv-Sg0-unsplash.jpg" className='rounded-xl w-[254px] h-[312px] md:ml-8 object-cover' alt="" />
                    <img src="https://i.ibb.co/MDv8SYk/rajat-sarki-AOhc-R6l-KQM-unsplash.jpg" className='rounded-xl w-[234px] h-[219px] object-cover' alt="" />
                    <img src="https://i.ibb.co/cxZNvNc/tim-mossholder-Kx060c-Rsmt0-unsplash.jpg" className='rounded-xl w-[351px] h-[234px] object-cover' alt="" />
                    <img src="https://i.ibb.co/8xS4kZt/mae-mu-h-2jr-L9c-MU-unsplash.jpg" className='rounded-xl w-[234px] h-[278px] object-cover' alt="" />
                    <img src="https://i.ibb.co/GnDwSVZ/hopers-studio-5-Mh-BVr-X69fg-unsplash.jpg" className='rounded-xl w-[254px] h-[312px] object-cover md:ml-20' alt="" />
                    <img src="https://i.ibb.co/rpSrDXr/lifestyle-ecofriendly-person.jpg" className='rounded-xl w-[307px] h-[234px] object-cover' alt="" />

            </div>
            <div className='md:w-1/2 sm:w-[500px] sm:mx-auto md:mt-[200px] mt-4'>
                <h2 className='text-4xl font-bold text-center mb-4'>Organic Farmer</h2>
                <div className="md:flex flex-col w-full border-opacity-50 md:px-[160px]">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div>
                            <button onClick={handleGoogle} className='flex items-center mx-4 md:mx-0 gap-2 text-[18px] px-[70px] py-[8px] border-2 border-black rounded-full font-bold'>
                                <img src="https://i.ibb.co/HKpFW6x/devicon-google.png" alt="" />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email" name="email" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" name="password" className="input input-bordered rounded-full bg-[#E8F0CA]" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <button className="btn bg-[#159122]  text-white w-full rounded-full">Login</button>
                        </div>
                        <h2 className='mt-4'>Don't have an account? <Link to='/register' className='text-blue-600'>Register</Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
