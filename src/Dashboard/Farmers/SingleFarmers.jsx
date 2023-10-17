import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const SingleFarmers = ({ sData }) => {
    const { image, nameOf, location, areaOfFarm, organization, crops_name, _id, unit,DateOfFoundation } = sData;
    console.log(sData);
    return (
        <div>
            <Link to={`/contact/${_id}`}>
                <div className='relative md:w-[302px] md:h-[302px] mt-10 hover:bg-[#C4D190] hover:rounded-xl rounded-xl border border-[#C4D190] cursor-pointer  hover:drop-shadow-xl transition duration-300 ease-in-out'>
                    <div className=''><LazyLoad  offset={100} debounce={false} throttle={100} onContentVisible={() => { console.log('loaded!') }}><img src={image} className=' h-[168px] w-full rounded-t-xl object-cover' alt="" /></LazyLoad>
                    <h2 className='absolute top-0 left-0 translate-x-1 translate-y-2 bg-[#ECDB3F] px-[8px] py-[2px] rounded-full w-[130px] text-black font-semibold'>Since {DateOfFoundation}</h2>
                    </div>
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