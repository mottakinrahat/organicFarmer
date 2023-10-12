import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SingleTraders from './SingleTraders';

const Traders = () => {
    const [arrayData, setArrayData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://organic-farmers-server.vercel.app/personalInfo')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.role === 'business');
                setArrayData(filteredData);
            })
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <div className='flex justify-around pt-[32px]'>
                <div><h2 className='text-[32px] font-semibold'>Our Traders</h2></div>
                <div className='border border-black rounded-full flex items-center bg-white'><span className='mx-4'><FaSearch /></span><input type="text" placeholder="Type here" className="input h-[43px] rounded-r-full w-80 max-w-xs" /></div>
            </div>

            <div className='grid grid-cols-3 gap-4 my-[101px] mx-[32px]'>
                {
                    arrayData.slice(0, showAll ? arrayData.length : 6).map((sData, index) => (
                        <SingleTraders key={index} sData={sData}></SingleTraders>
                    ))
                }
            </div>

            {arrayData.length >= 6 && (
                <div className='text-center pb-8'>
                    <button className='text-[18px] font-semibold text-[#159122]' onClick={toggleShowAll}>
                        {showAll ? 'Show less' : 'Show more'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Traders;
