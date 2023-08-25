import React from 'react';
import frame from '../../../assets/frame/organicFrame.png'

const WhyOrganic = () => {
    return (
        <div className='md:h-[632px] md:w-[1360px] bg-[#C4D290] mt-[33px] mx-auto rounded-xl md:flex justify-between items-center px-[56px]'>
            <div className='w-1/2'>
             <img src={frame} alt="" />
            </div>

            <div  className='w-[584px]'>
                <h1 className='text-[32px] mb-[32px]'>Why Organic?</h1>
                <div className='flex flex-col gap-[24px]'>
                    <div className='bg-[#29692F] text-white p-[24px] rounded'>
                        <h2 className='text-[24px] font-semibold'>Healthier Produce</h2>
                        <p className='text-[18px]'>Organic farming avoids synthetic pesticides, herbicides, and GMOs, resulting in produce free from harmful chemicals, promoting consumer health.</p>
                    </div>
                    <div className='bg-[#399C43] text-white py-[8px] px-[16px] rounded'>
                        <h2 className='text-[18px] font-semibold'>Soil Enrichment</h2>
                    </div>
                    <div className='bg-[#399C43] text-white py-[8px] px-[16px] rounded'>
                        <h2 className='text-[18px] font-semibold'>Environmental Conservation</h2>
                    </div>
                    <div className='bg-[#399C43] text-white py-[8px] px-[16px] rounded'>
                        <h2 className='text-[18px] font-semibold'>Nutrient-Rich Crops</h2>
                    </div>
                    <div className='bg-[#399C43] text-white py-[8px] px-[16px] rounded'>
                        <h2 className='text-[18px] font-semibold'>Resilience to Climate Change</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyOrganic;