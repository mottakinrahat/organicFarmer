import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleContact from './SingleContact';
import { FaPlus } from "react-icons/fa";
import Swal from 'sweetalert2';
const Contact = () => {
    const [arrayData, setArrayData] = useState([]);
    const userData = useLoaderData()
    const [showAll, setShowAll] = useState(false)
    console.log(userData);
    useEffect(() => {
        fetch('https://organic-farmers-server.vercel.app/crops')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.email === userData.email);
                setArrayData(filteredData);
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
                fetch(`https://organic-farmers-server.vercel.app/crops/${id}`, {
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
        <div className='md:pt-40 sm:mt-20 md:mt-2 bg-[#FBFFED]'>
            <div className='md:flex sm:flex justify-around  '>
                <div className='md:bg-[#FFFFFF] sm:bg-[#FFFFFF]  md:border-2 sm:rounded-xl '>
                    <div className=' px-8 py-5 '><h2 className=' font-bold'>Personal Information</h2></div>
                    <div className=' md:grid grid-cols-2 justify-evenly items-center p-4 text-center  rounded-xl md:w-[440px] sm:w-[270px] h-auto'>
                        <div className='mx-auto'><img src={userData.photo} className='w-[100px] h-[100px] md:ml-4 sm:ml-4 ml-32 ' alt="" /></div>
                        <div>
                            <h2 className='text-[16px] mb-2'><span className='font-bold'>Name:</span> {userData?.nameOf}</h2>
                            <h2 className='text-[16px] mb-2'><span className='font-bold'>Location:</span> {userData?.location}</h2>
                            {userData?.role == 'farmer' ? <h2 className='text-[16px]'><span className='font-bold'>Farm area:</span> {userData?.areaOfFarm}</h2> :
                                <h2 className='text-[16px]'><span className='font-bold'>Business Name:</span> {userData?.nameOfBusiness
                                }</h2>}
                                 <h2 className='text-[16px] mb-2'><span className='font-bold'>Date of Foundation:</span> {userData?.DateOfFoundation}</h2>
                                     <h2 className='text-[16px] mb-2'><span className='font-bold'>Turn Over:</span> {userData?.TurnOver}</h2>
                        </div>

                        <div className='text-[16px]  md:pl-8 mt-20'>
                            <h2 className='font-bold'>Contact Information:</h2>
                            <h2 className='text-[16px]'><span className='font-bold'>Email_id:</span>{userData?.email}</h2>
                            <h2 className='text-[16px]'><span className='font-bold'>contact_no:</span>{userData?.number}</h2>
                        </div>
                    </div>
                </div>


                <div className='md:w-4/3 md:bg-[#FFFFFF] sm:bg-[#FFFFFF] border-2 rounded-xl'>
                    <div className='md:flex justify-between items-center '>
                        <h3 className='text-xl font-bold p-4'>Product listing</h3>
                    </div>
                    {showAll ? <div className='md:grid sm:grid md:grid-cols-3 sm:grid-cols-2 gap-4 my-[20px] md:mx-[32px] sm:mx-4'>
                        {
                            arrayData.map((sData, index) => <SingleContact key={index} sData={sData}></SingleContact>)
                        }
                    </div> :
                        <div className='md:grid sm:grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:mx-[32px] sm:mx-4'>
                            {
                                arrayData.slice(0, 6).map((sData, index) => <SingleContact key={index} sData={sData} handleDelete={handleDelete}></SingleContact>)
                            }
                        </div>
                    }
                    {!showAll && <div className='text-center text-[18px] text-[#159122] font-bold'><button onClick={() => setShowAll(true)}>See More</button></div>}
                </div>
            </div>
        </div>
    );
};

export default Contact;