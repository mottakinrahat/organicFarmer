import React, { useEffect, useState } from 'react';
import SingleUs from './SingleUs/SingleUs';

const WhyUs = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('/why.json')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div className='md:mt-[98px]'>
            <h2 className='text-[32px] mb-[40px] font-semibold text-center'>Why Us </h2>
            <div className='md:flex justify-evenly items-center'>
                {
                    arrayData.map((sData, index) => <SingleUs key={index} sData={sData}></SingleUs>)
                }
            </div>
        </div>
    );
};

export default WhyUs;