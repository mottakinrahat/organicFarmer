import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SingleProduct from './SingleProduct';
const ProductCard = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div className=''>
            <div className='md:flex sm:flex justify-around items-center pt-[32px]'>
                <div className='border border-black rounded-full flex items-center mx-4 sm:mx-0 md:mx-0 bg-white'><span className='mx-4'><FaSearch /></span><input type="text" placeholder="Type here" className="input md:h-[43px] sm:h-[43px] rounded-r-full md:w-80 md:max-w-xs" /></div>
                <div className='text-center'><button className='bg-[#159122] px-[118px]  mt-5 sm:mt-0 md:mt-0 py-[12px] text-white font-bold rounded-xl'>For Bulk Order</button></div>
            </div>



            <div className='md:grid sm:grid md:grid-cols-3 sm:grid-cols-2 md:gap-[32px] mt-[32px]  md:mx-[80px]'>
                {
                    arrayData.map((sData, index) => <SingleProduct key={index} sData={sData}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default ProductCard;