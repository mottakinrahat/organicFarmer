import React from 'react';
import { Link } from 'react-router-dom';

const SingleFarmers = ({sData}) => {
    const { photo, nameOf, location, areaOfFarm, organization, crops_name, _id,unit } = sData;
    return (
        <div className='md:w-[302px] mt-10'>
            <div><img src={photo} className='h-[168px] w-full rounded-xl object-cover' alt="" /></div>
            <div className='text-[18px] mt-[16px]'>
                <h2>{nameOf}</h2>
                <h2>{location}</h2>
                <h2>{areaOfFarm} {unit}</h2>
                <h2>{crops_name}</h2>
            </div>
            <div className='text-[18px] mt-[16px] flex gap-10'>
                <Link to={`/contact/${_id}`}><button className='px-[32px] py-[6px] bg-[#159122] text-white font-bold rounded-full '>Contact</button></Link>
                <button className='px-[32px] py-[6px]  text-[#159122] font-bold rounded-full '>Save</button>
            </div>

        </div>
    );
};

export default SingleFarmers;