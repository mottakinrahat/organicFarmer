import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import SingleProfile from './SingleProfile';


const ProfileRoute = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [showAll, setShowAll] = useState(false)
    const [arrayData, setArrayData] = useState([])
    const [cropsData, setCropsData] = useState([])
    const userData = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/crops')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.email === user?.email);
                setCropsData(filteredData);
            })
    }, [])
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/crops/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = arrayData.filter(
                                (specific) => specific._id !== id
                            );
                            setArrayData(remaining);
                        }
                    })
                    .catch((error) => {
                        Swal.fire(
                            'Error!',
                            `${error.message}`,
                            'error'
                        );
                    });
            }
        });
    };
    return (
        <div>
            <div className='md:pt-40 sm:pt-20 sm:bg-[#FBFFED] md:bg-[#FBFFED] '>
                <div className='md:flex sm:flex justify-around gap-2'>

                    <div className='sm:bg-[#FBFFED] md:bg-[#FBFFED]   md:border-2 sm:border-2 rounded-xl'>
                        <div className='flex justify-between md:text-xl gap-4 items-center px-8 py-5'><h2 className=' font-bold'>Personal Information</h2>
                            <Link to={`/updateProfile/${userData._id}`}><button className='text-[14px] bg-[#159122] px-4 text-white rounded-xl'>Edit</button></Link> </div>
                        <div className='  md:grid sm:grid grid-cols-2 justify-evenly items-center md:p-4 sm:p-1  rounded-xl md:w-[440px] sm:w-[270px] h-auto'>
                            <div><img src={user?.photoURL} className='md:w-[100px] w-[90px] md:h-[100px] h-[90px] md:ml-4 sm:ml-2 ml-32' alt="" /></div>
                            <div className=''>
                                <h2 className='md:md:text-[16px] mb-2'><span className='font-bold'>Name:</span> {user?.displayName}</h2>
                                <h2 className='md:text-[16px] mb-2'><span className='font-bold'>Location:</span> {userData?.location} ,{userData?.states}</h2>
                                {userData?.role == 'farmers' ? <h2 className='md:text-[16px]'><span className='font-bold'>Farm area:</span> {userData?.areaOfFarm}</h2> :
                                    <h2 className='md:text-[16px]'><span className='font-bold'>Business Name:</span> {userData?.nameOfBusiness
                                    }</h2>}
                                <h2 className='md:text-[16px] mb-2'><span className='font-bold'>Date of Foundation:</span> {userData?.DateOfFoundation}</h2>
                                <h2 className='md:text-[16px] mb-2'><span className='font-bold'>Turn Over:</span> {userData?.TurnOver} {userData?.amount}</h2>
                            </div>

                            <div className='md:text-[16px]  pl-8 mt-20'>
                                <h2 className='font-bold'>Contact Information:</h2>
                                <h2 className='md:text-[16px]'><span className='font-bold'>Email_id:</span>{userData?.email}</h2>
                                <h2 className='md:text-[16px]'><span className='font-bold'>contact_no:</span>{userData?.number}</h2>
                            </div>
                        </div>
                    </div>



                    <div className='w-4/3 sm:bg-[#FFFFFF] md:bg-[#FFFFFF] border-2 rounded-xl'>
                        <div className='flex justify-between items-center '>
                            <h3 className='text-xl font-bold p-4'>Product listing</h3>
                            <Link to='/profileDashboard/crops'><button className='flex items-center gap-2 px-[40px] py-[8px] bg-[#159122] text-white font-semibold rounded-full mr-8'><FaPlus />Add</button></Link>
                        </div>
                        {showAll ? <div className='md:grid sm:grid sm:grid-cols-2 md:grid-cols-3  gap-4 my-[20px] mx-[32px]'>
                            {
                                cropsData.map((sData, index) => <SingleProfile key={index} sData={sData}></SingleProfile>)
                            }
                        </div> :
                            <div className='md:grid sm:grid sm:grid-cols-2 md:grid-cols-3  gap-4 my-[20px] md:mx-[32px] sm:mx-4'>
                                {
                                    cropsData.slice(0, 6).map((sData, index) => <SingleProfile key={index} sData={sData} handleDelete={handleDelete}></SingleProfile>)
                                }
                            </div>
                        }
                        {!showAll && <div className='text-center text-[18px] text-[#159122] font-bold'><button onClick={() => setShowAll(true)}>See More</button></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileRoute;