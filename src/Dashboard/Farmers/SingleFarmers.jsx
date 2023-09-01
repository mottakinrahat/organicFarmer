import React from 'react';

const SingleFarmers = (sData) => {
    const{image,name,location,organization,crops_name}=sData.sData;
    console.log(sData.sData);
    return (
        <div className='w-[302px]'>
        <div><img src={image} className='h-[168px] w-full rounded-xl' alt="" /></div>
        <div className='text-[18px] mt-[16px]'>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>{organization}</h2>
            <h2>{crops_name}</h2>
        </div>
        <div className='text-[18px] mt-[16px] flex gap-10'>
            <button className='px-[32px] py-[6px] bg-[#159122] text-white font-bold rounded-full '>Contact</button>
            <button className='px-[32px] py-[6px]  text-[#159122] font-bold rounded-full '>Save</button>
        </div>
   
    </div>
    );
};

export default SingleFarmers;