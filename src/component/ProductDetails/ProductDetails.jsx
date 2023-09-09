import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleDetails from './SingleDetails';

const ProductDetails = () => {
    const productsData = useLoaderData();
    const [arrayData, setArrayData] = useState([]);
    useEffect(() => {
        // Fetch product data
        fetch('http://localhost:5000/crops')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.productName === productsData.product_name);
                setArrayData(filteredData);
            })
    }, [productsData.product_name]);
    return (
        <div className='mt-40 px-[80px]'>
            <div className="card lg:card-side bg-[#FBFFED] shadow-xl">
                <figure className='w-1/3'><img src={productsData?.image} className='w-[392px] h-[232px]' alt="Album" /></figure>
                <div className="card-body w-4/3">
                    <h2 className="card-title text-3xl">{productsData?.product_name}</h2>
                    <p className='text-[16px] w-[570px]'>{productsData.product_description}</p>
                    <p className='text-[16px]'><span className='font-bold'>Quantity: </span>{productsData.product_quantity}</p>

                    <div className="card-actions justify-start">
                        <button className='px-[24px] py-[12px] text-white bg-[#159122] rounded-full'>Contact for Order</button>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <div>
                <h2 className='text-[32px] mt-10 font-semibold'>Farmer who are  Selling </h2>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Farmers Name</th>
                                <th>Phone Number</th>
                                <th>Quantity</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrayData.map(farmerData => <SingleDetails key={farmerData._id} farmerData={farmerData} ></SingleDetails>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;