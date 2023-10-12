import React from 'react';
import LazyLoad from 'react-lazy-load';
const SingleExisting = ({sData}) => {
    const{image,name,profession}=sData;
    return (
        <div className='mx-auto'>
                <LazyLoad offset={100} debounce={false} throttle={100} onContentVisible={() => { console.log('loaded!') }}><img src={image} className='w-[350px] h-[280px] object-cover' alt="" /></LazyLoad>
                <h2 className='text-[24px] font-semibold'>{name}</h2>
                <h2 className='text-[24px] font-semibold'>{profession}</h2>
            </div>
    );
};

export default SingleExisting;