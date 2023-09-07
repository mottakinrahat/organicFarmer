import React from 'react';

const SingleContact = (sData) => {
    console.log(sData);
    const { ProductImage, productName, quantity, price } = sData.sData;
    return (
        <div className="card w-[300px] h-auto ">
            <figure><img src={ProductImage} alt="Shoes" className='h-[144px] w-[238px] object-cover rounded-t-lg' /></figure>
            <div className="card-body">
                <h2 className="text-[24px] font-bold">{productName}</h2>

                <p className='text-[15px]'><span className='font-semibold'>Quantity:</span> {quantity}</p>
                <p className='text-[15px]'><span className='font-semibold'>Price:</span> {price}</p>
                <div className=" flex justify-between mt-[16px] gap-[32px] ">
                    <button className="px-[10px] py-[0px] bg-[#159122] font-bold rounded-full text-white">Update</button>
                    <button className="px-[16px] py-[8px] text-[#159122] font-bold rounded-full">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default SingleContact;