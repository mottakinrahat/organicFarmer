import React from 'react';

const SingleUs = ({sData}) => {
    const{image,title,paragraph}=sData;
    return (
        <div className='mb-20'>
            <div className='w-[362px] h-[362px] p-[32px] bg-[#E8F0CA] rounded-xl'>
                <img src={image} className='mb-[35px]' alt="" />
                <h2 className='text-[24px] mb-[18px] font-bold'>{title}</h2>
                <p className='w-[210px] text-[16px] font-semibold'>{paragraph}</p>
            </div>
        </div>
    );
};

export default SingleUs;