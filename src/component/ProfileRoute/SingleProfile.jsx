import React from 'react';
import { Link } from 'react-router-dom';

const SingleProfile = ({ sData, handleDelete }) => {
    const { ProductImage, productName, quantity, price, _id,amount} = sData;
    console.log(sData);
    return (
        <div className="card md:w-[300px] h-auto ">
            <figure><img src={ProductImage} alt="Shoes" className='h-[144px] w-[238px] object-cover rounded-t-lg' /></figure>
            <div className="card-body sm:mx-0 md:mx-0 mx-auto">
                <h2 className="md:text-[24px] text-[18px] font-bold">{productName}</h2>

                <p className='text-[15px]'><span className='font-semibold'>Quantity:</span> {quantity} {sData?.unit}</p>
                <p className='text-[15px]'><span className='font-semibold'>Price:</span> ₹ {price} {sData?.amount}</p>
                <div className=" flex justify-between mt-[16px] md:gap-[32px] sm:gap-[15px] ">
                    <button onClick={() => handleDelete(_id)} className="px-[16px] hover:bg-[#E8F0CA] hover:rounded-full transition duration-300 ease-in-out hover:delay-75 py-[8px] text-[#808080] font-bold rounded-full">Delete</button>
                    <Link to={`/update/${_id}`}><button className="px-[10px] py-[8px] bg-[#159122] hover:bg-[#29692F] transition duration-300 ease-in-out font-bold rounded-full text-white">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProfile;