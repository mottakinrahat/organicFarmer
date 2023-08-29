import React, { useEffect, useState } from 'react';
import SingleValue from './SingleValue/SingleValue';

const Value = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('/values.json')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div className='md:mt-[98px]'>
            <h2 className='text-[32px] mb-[40px] font-semibold text-center'>Our Values </h2>
            <div className='md:flex justify-evenly items-center'>
                {
                    arrayData.map((sData, index) => <SingleValue key={index} sData={sData}></SingleValue>)
                }
            </div>
        </div>
    );
};

export default Value;