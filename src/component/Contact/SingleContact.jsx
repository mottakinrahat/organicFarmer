import React from 'react';
import { Link } from 'react-router-dom';

    const SingleContact = ({sData,handleDelete}) => {
    const { ProductImage, productName, quantity, price,_id } = sData;
    return (
        <div className="card w-[300px] h-auto ">
            <figure><img src={ProductImage} alt="Shoes" className='h-[144px] w-[238px] object-cover rounded-t-lg' /></figure>
            <div className="card-body">
                <h2 className="text-[24px] font-bold">{productName}</h2>

                <p className='text-[15px]'><span className='font-semibold'>Quantity:</span> {quantity}</p>
                <p className='text-[15px]'><span className='font-semibold'>Price:</span> {price}</p>
                <div className=" flex justify-between mt-[16px] gap-[32px] ">
                    
                </div>
            </div>
        </div>
    );
};

export default SingleContact;