import React from 'react';
import { Link } from 'react-router-dom';

const SingleTraders = (sData) => {
    const { image, nameOf, location, areaOfFarm, organization, crops_name, _id } = sData.sData;
    return (
        <div>
            <Link  to={`/contact/${_id}`}>
                <div className='md:w-[302px] md:h-[302px] mt-10 hover:bg-[#C4D190] hover:rounded-xl rounded-xl border border-[#C4D190] cursor-pointer hover:delay-50 hover:drop-shadow-xl transition duration-300 ease-in-out'>
                    <div><img src={image} className='h-[168px] w-full rounded-t-xl object-cover' alt="" /></div>
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