import React from 'react';
import { Link } from 'react-router-dom';

const SingleTraders = (sData) => {
    const { image, nameOf, location, areaOfFarm, organization, crops_name, _id } = sData.sData;
    return (
        <div>
            <Link  to={`/contact/${_id}`}>
                <div className='md:w-[302px] md:h-[302px] mt-10 hover:bg-[#E8F0CA] hover:rounded-xl cursor-pointer hover:transition-500'>
                    <div><img src={image} className='h-[168px] w-full rounded-xl object-cover' alt="" /></div>
                    <div className='text-[18px] ml-2 mt-[16px]'>
                        <h2 className='font-bold'>{nameOf}</h2>
                        <h2>{location}</h2>
                        <h2>{organization}</h2>
                        <h2>{crops_name}</h2>
                    </div>
            

                </div>
            </Link>
        </div>
    );
};

export default SingleTraders;