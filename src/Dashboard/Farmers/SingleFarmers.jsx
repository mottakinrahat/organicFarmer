import React from 'react';
import { Link } from 'react-router-dom';

const SingleFarmers = ({ sData }) => {
    const { image, nameOf, location, areaOfFarm, organization, crops_name, _id, unit } = sData;
    return (
        <div>
            <Link to={`/contact/${_id}`}>
                <div className='md:w-[302px] md:h-[302px] mt-10 hover:bg-[#E8F0CA] hover:rounded-xl cursor-pointer hover:transition-500'>
                    <div><img src={image} className='h-[168px] w-full rounded-xl object-cover' alt="" /></div>
                    <div className='text-[18px] mt-[16px] ml-2'>
                        <h2 className='font-semibold'>{nameOf}</h2>
                        <h2>{location}</h2>
                        <h2>{areaOfFarm} {unit}</h2>
                        <h2>{crops_name}</h2>
                    </div>
                   

                </div>
            </Link>
        </div>
    );
};

export default SingleFarmers;