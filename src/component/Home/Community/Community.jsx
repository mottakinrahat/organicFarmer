import React from 'react';
import ComSlider from './ComSlider';

const Community = () => {
    return (
        <div className='md:pb-20 md:h-[750px] py-6 md:py-0 bg-[#C4D290] md:mx-[40px] rounded-xl mb-10 md:mb-[96px]'>
            <div className='md:h-[632px]  md:mx-[40px] mx-[20px] rounded-xl md:mb-[96px] mb-10 '>
                <h2 className='text-[32px] font-bold text-center mb-[70px] pt-10'>Our Community</h2>
                <div className='md:flex justify-between items-center md:px-[48px]'>


                    <div className='md:w-[584px]'>
                        <h2 className='text-[32px] font-semibold md:mb-[40px]'>Join hands with us to create a sustainable future through organic farming. </h2>
                        <p className='mb-[40px]'>On our exclusive community platform, serious growers like yourself come together to meet and support one another, get answers and advice, learn from the experts, participate in growth challenges, access exclusive offers from our partners, and more.</p>
                        <button className='px-[40px] text-white font-bold py-[12px] bg-[#159122] mb-8 md:mb-0 rounded-xl'>Explore Products</button>
                    </div>

                    <div className=' md:w-1/2 h-auto'>
                        <ComSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;