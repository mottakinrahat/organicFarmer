import React from 'react';

const SingleApproch = ({sData}) => {
    const{image,title,paragraph}=sData;
    return (
        <div className='w-[290px] mb-[24px] h-[512px]'>
        <img src={image} alt="" className='mb-[24px]' />
        <h1 className='text-[24px] mb-[16px]'>{title}</h1>
        <p className='text-[18px]'>{paragraph}</p>
    </div>
    );
};

export default SingleApproch;