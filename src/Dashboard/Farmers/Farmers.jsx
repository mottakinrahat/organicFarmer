import React, { useEffect, useState } from 'react';
import SingleFarmers from './SingleFarmers';

const Farmers = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        fetch('/farmers.json')
            .then(res => res.json())
            .then(data => setArrayData(data))
    }, [])
    return (
        <div>
            <h2>This is farmers page</h2>

            <div className='grid grid-cols-3 gap-4 my-[101px] mx-[32px]'>
                {
                    arrayData.map((sData, index) => <SingleFarmers key={index} sData={sData}></SingleFarmers>)
                }
            </div>
           <div className='text-center pb-4'> <button className='text-[18px] font-semibold text-[#159122]'>Show more</button></div>
        </div>
    );
};

export default Farmers;