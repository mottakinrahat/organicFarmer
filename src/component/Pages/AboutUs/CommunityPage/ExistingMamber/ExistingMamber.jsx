import React, { useEffect, useState } from 'react';
import SingleExisting from './SingleExisting';

const ExistingMamber = () => {
    const[arrayData,setArrayData]=useState([])
    useEffect(() => {
        fetch('/existingMember.json')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div className='mt-[80px]'>
            <h2 className='text-[32px] font-bold text-center mb-[40px]'>Some of our existing members</h2>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 md:mx-[200px] mx-4  items-center'>
                {
                    arrayData.map((sData, index) => <SingleExisting key={index} sData={sData}></SingleExisting>)
                }
            </div>
        </div>
    );
};

export default ExistingMamber;