import React, { useEffect, useState } from 'react';
import SingleApproch from './SingleApproch/SingleApproch';

const Approch = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('/approch.json')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div className='md:mt-[98px]'>
            <h2 className='text-[32px] mb-[40px] font-semibold text-center'>Our Approach</h2>
            <div className='md:flex sm:grid grid-cols-2 justify-evenly items-center'>
                {
                    arrayData.map((sData, index) => <SingleApproch key={index} sData={sData}></SingleApproch>)
                }
            </div>
        </div>
       
    );
};

export default Approch;