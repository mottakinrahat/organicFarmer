import React from 'react';
import SliderCom from '../Community/SliderCom';

const Offering = () => {
    return (
        <div className='md:h-[632px] w-[300px]  bg-[#C4D290] md:w-auto mx-auto sm:w-[680px] md:mx-[40px] rounded-xl md:mb-[96px]'>
                <h2 className='text-[32px] font-bold text-center mb-[70px] pt-10'>What we are offering.</h2>
            <div className='md:flex sm:flex justify-between items-center md:px-[48px] sm:px-[40px] px-[20px] pb-2'>


                <div className='md:w-[584px]'>
                    <h2 className='text-[32px] font-semibold md:mb-[40px] sm:mb-[20px] mb-2 '>Our Products </h2>
                    <p className='md:mb-[40px]'>Welcome to our Organic Harvest! Explore a range of naturally nurtured delights that embrace both taste and wellness. From nutritious staples to unique high-profit crops, dive into a world where flavor meets sustainability. Join us in celebrating the goodness of organic farming and its positive impact on you and the environment.</p>
                    <button className='px-[40px] text-white font-bold py-[12px] bg-[#159122] rounded-xl'>Explore Products</button>
                </div>

                <div className='w-1/2'>
                    <SliderCom/>
                </div>
            </div>
        </div>
    );
};

export default Offering;