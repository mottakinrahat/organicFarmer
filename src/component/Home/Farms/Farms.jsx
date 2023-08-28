import React from 'react';
import india from '../../../assets/farms/in 1.png';

const Farms = () => {
    return (
        <div>
            <div className='pb-20'>
                <div className='h-[632px]  mx-[40px] rounded-xl mb-[96px] '>
                    <h2 className='text-[32px] font-bold text-center mb-[70px] pt-10'>Our Farms</h2>
                    <div className='flex justify-between items-center pl-[96px] pr-[182px]'>
                    <div className='w-1/2'>
                            <img src={india} alt="" />
                        </div>

                        <div className='w-[584px]'>
                            <h2 className='text-[32px] font-semibold mb-[40px]'>Our coverage </h2>
                            <p className='mb-[40px]'>Welcome to our Organic Harvest! Explore a range of naturally nurtured delights that embrace both taste and wellness. From nutritious staples to unique high-profit crops, dive into a world where flavor meets sustainability. Join us in celebrating the goodness of organic farming and its positive impact on you and the environment.</p>
                            <button className='px-[40px] text-white font-bold py-[12px] bg-[#159122] rounded-xl'>Explore Products</button>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Farms;