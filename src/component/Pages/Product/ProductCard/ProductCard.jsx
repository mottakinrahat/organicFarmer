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
            <div className='flex justify-around items-center pt-[32px]'>
                <div className='border border-black rounded-full flex items-center bg-white'><span className='mx-4'><FaSearch /></span><input type="text" placeholder="Type here" className="input h-[43px] rounded-r-full w-80 max-w-xs" /></div>
                <div><button className='bg-[#159122] px-[118px] py-[12px] text-white font-bold rounded-xl'>For Bulk Order</button></div>
            </div>



            <div className='md:grid grid-cols-3 gap-[32px] mt-[32px] mx-[80px]'>
                {
                    arrayData.map((sData, index) => <SingleProduct key={index} sData={sData}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default ProductCard;