import React from 'react';

const SingleValue = ({sData}) => {
    console.log(sData);
    const{image,title,paragraph}=sData;
    return (
        <div className='md:w-[290px] sm:w-[290px] w-[210px] mx-auto md:mb-[24px] sm:mb-[24px] md:h-[358px] sm:h-[358px]'>
            <img src={image} alt="" className='mb-[24px]'/>
            <h1 className='text-[24px] mb-[16px]'>{title}</h1>
            <p className='md:text-[18px] sm:text-[18px] text-[16px]'>{paragraph}</p>
        </div>
    );
};

export default SingleValue;