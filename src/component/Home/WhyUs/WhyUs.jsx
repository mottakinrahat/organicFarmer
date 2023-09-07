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
            <h2 className='text-[32px] mb-[40px] font-semibold  text-center'>Why Us </h2>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center '>
                {
                    arrayData.map((sData, index) => <SingleUs key={index} sData={sData}></SingleUs>)
                }
            </div>
        </div>
    );
};

export default WhyUs;