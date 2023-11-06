import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SingleTraders from './SingleTraders';

const Traders = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('https://organic-farmers-server.vercel.app/personalInfo')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.role === 'business');
                setArrayData(filteredData);
            })
    }, []);

    return (
        <div className='mx-[20px]'>
            <div className='flex justify-between pt-[32px]'>
                <div><h2 className='text-[32px] font-semibold'>Our Traders</h2></div>
                {/* <div className='border hidden border-black rounded-full  items-center bg-white'><span className='mx-4 '><FaSearch /></span><input type="text" placeholder="Type here" className="input h-[43px] rounded-r-full w-80 max-w-xs" /></div> */}
            </div>

            <div className='grid grid-cols-3 gap-4 my-[101px] md:px-10 '>
                {
                    arrayData.map((sData, index) => (
                        <SingleTraders key={index} sData={sData}></SingleTraders>
                    ))
                }
            </div>
        </div>
    );
};

export default Traders;
