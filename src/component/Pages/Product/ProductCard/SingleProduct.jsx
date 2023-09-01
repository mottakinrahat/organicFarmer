import React from 'react';

const SingleProduct = (sData) => {
    console.log(sData.sData);
    const{image, product_name,product_description,price,product_quantity}=sData.sData;
    return (
        <div>
            <div className="card w-96 ">
  <figure><img src={image} alt="Shoes" className='h-[246px] w-[400px] object-cover ' /></figure>
  <div className="card-body">
    <h2 className="text-[24px] font-bold">{product_name}</h2>
    <p className='text-[18px]'>{product_description}</p>
    <p className='text-[18px]'><span className='font-semibold'>Quantity:</span> {product_quantity}</p>
    <p className='text-[18px]'><span className='font-semibold'>Price:</span> {price}</p>
    <div className=" flex justify-between mt-[16px] gap-[32px] ">
      <button className="px-[16px] py-[8px] bg-[#159122] font-bold rounded-full text-white">Contact for Order</button>
      <button className="px-[16px] py-[8px] text-[#159122] font-bold rounded-full">Know More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProduct;