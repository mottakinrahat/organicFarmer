import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({sData}) => {
  const { image, product_name, product_description, price, product_quantity,_id } = sData;
  return (
    <div>
      <div className="card md:w-96 w-[324px] mx-auto">
        <figure><img src={image} alt="Shoes" className='h-[246px] md:w-[400px] w-[324px] object-cover ' /></figure>
        <div className="card-body">
          <h2 className="text-[24px] font-bold">{product_name}</h2>
          <p className='text-[18px]'>{product_description}</p>
          <p className='text-[18px]'><span className='font-semibold'>Quantity:</span> {product_quantity}</p>
          <p className='text-[18px]'><span className='font-semibold'>Price:</span> {price}</p>
          <div className=" flex justify-between mt-[16px] gap-[32px] ">
            <Link to={`/productDetails/${_id}`}><button className="px-[16px] py-[8px] bg-[#159122] font-bold rounded-full text-white">Contact for Order</button></Link>
            <button className="px-[16px] py-[8px] text-[#159122] font-bold rounded-full">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;