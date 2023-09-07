import React from 'react';

const SingleUs = ({sData}) => {
    const{image,title,paragraph}=sData;
    return (
        <div className='mb-20 mx-auto'>
            <div className='h-[295px] w-[300px] p-4 sm:p-0 sm:w-[316px] sm:px-4 sm:h-[286px] md:w-[362px] md:h-[362px] md:p-[32px] bg-[#E8F0CA] rounded-xl'>
                <img src={image} className='mb-[35px]' alt="" />
                <h2 className='text-[24px] mb-[18px] font-bold'>{title}</h2>
                <p className='w-[210px] text-[16px] font-semibold'>{paragraph}</p>
            </div>
        </div>
    );
};

export default SingleUs;