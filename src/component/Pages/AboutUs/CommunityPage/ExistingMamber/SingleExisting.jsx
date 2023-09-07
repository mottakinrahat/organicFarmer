import React from 'react';

const SingleExisting = ({sData}) => {
    const{image,name,profession}=sData;
    return (
        <div className='mx-auto'>
                <img src={image} className='w-[350px] h-[280px] object-cover' alt="" />
                <h2 className='text-[24px] font-semibold'>{name}</h2>
                <h2 className='text-[24px] font-semibold'>{profession}</h2>
            </div>
    );
};

export default SingleExisting;