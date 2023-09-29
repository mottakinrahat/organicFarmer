import React, { useEffect, useState } from 'react';
import frame from '../../../assets/frame/organicFrame.png';
import { FaAngleDown } from "react-icons/fa";

const WhyOrganic = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('/accordion.json')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div className=' py-20 mt-20 w-[350px] h-auto sm:w-[680px] sm:h-[1044px]  md:h-[632px] md:w-[1360px] bg-[#C4D290] sm:pt-[50px] sm:mt-[30px] md:mt-[33px] mx-auto rounded-xl md:flex justify-between items-center px-[56px]'>
            <div className='md:w-1/2'>
                <img src={frame} alt="" />
            </div>

            <div className=' md:w-[584px]'>
                <h1 className='text-[32px] mb-[32px]'>Why Organic?</h1>
                <div className='md:ml-0 md:px-2 md:w-full'>
                    {arrayData.map((sdata, index) => (
                        <div key={index} tabIndex={0} className="collapse bg-[#399C43] text-white focus:bg-[#29692F] focus:text-[white] mb-4">
                            <div className="collapse-title text-xl font-bold flex justify-between items-center">
                               <h2> {sdata.title}</h2>
                               <FaAngleDown/>
                            </div>
                            <div className="collapse-content">
                                <p className='text-[18px]'>{sdata.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyOrganic;
