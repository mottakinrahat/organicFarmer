import React, { useEffect, useState } from 'react';
import SingleFarmers from './SingleFarmers';
import { FaSearch } from "react-icons/fa";

const Farmers = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('https://organic-farmers-server.vercel.app/personalInfo')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.role === 'farmer');
                setArrayData(filteredData);
            });
    }, []);

   

    return (
        <div className='mx-[20px]'>
            <div className='md:flex justify-between  text-center pt-[38px]'>
                <div><h2 className='text-[32px] font-semibold'>Our Farmers</h2></div>
                {/* <div className='border border-black rounded-full flex items-center bg-white'><span className='mx-4'><FaSearch /></span><input type="text" placeholder="Type here" className="input h-[43px] rounded-r-full w-80 max-w-xs" /></div> */}
            </div>

            <div className='md:grid grid-cols-3 gap-4 my-[101px] md:px-10'>
                {
                    arrayData.map((sData) => (
                        <SingleFarmers key={sData._id} sData={sData}></SingleFarmers>
                    ))
                }
            </div>
        </div>
    );
};

export default Farmers;
