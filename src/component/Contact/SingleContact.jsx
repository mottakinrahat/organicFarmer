import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

    const SingleContact = ({sData,handleDelete}) => {
    const { ProductImage, productName, quantity, price,_id,amount}= sData;
    return (
        <div className="card md:w-[300px] sm:mr-2 md:mr-0 h-auto ">
            <figure><LazyLoad  offset={100} debounce={false} throttle={100} onContentVisible={() => { console.log('loaded!') }}><img src={ProductImage} alt="Shoes" className='h-[144px] w-[238px] object-cover rounded-t-lg' /></LazyLoad></figure>
            <div className="card-body sm:mx-0 md:mx-0 mx-auto">
                <h2 className="md:text-[24px] text-[20px] font-bold">{productName}</h2>

                <p className='text-[15px]'><span className='font-semibold'>Quantity:</span> {quantity} {sData?.unit}</p>
                <p className='text-[15px]'><span className='font-semibold'>Price:</span> {price} {sData?.amount}</p>
                <div className=" flex justify-between mt-[16px] gap-[32px] ">
                    
                </div>
            </div>
        </div>
    );
};

export default SingleContact;