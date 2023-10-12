import React, { useEffect, useState } from 'react';
import SingleFarmers from './SingleFarmers';
import { FaSearch } from "react-icons/fa";

const Farmers = () => {
    const [arrayData, setArrayData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://organic-farmers-server.vercel.app/personalInfo')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.role === 'farmer');
                setArrayData(filteredData);
            });
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <div className='md:flex justify-around text-center pt-[38px]'>
                <div><h2 className='text-[32px] font-semibold'>Our Farmers</h2></div>
                <div className='border border-black rounded-full flex items-center bg-white'><span className='mx-4'><FaSearch /></span><input type="text" placeholder="Type here" className="input h-[43px] rounded-r-full w-80 max-w-xs" /></div>
            </div>

            <div className='md:grid grid-cols-3 gap-4 my-[101px] mx-[32px]'>
                {
                    arrayData.slice(0, showAll ? arrayData.length : 6).map((sData) => (
                        <SingleFarmers key={sData._id} sData={sData}></SingleFarmers>
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

export default Farmers;
