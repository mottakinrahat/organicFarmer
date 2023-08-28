import React from 'react';
import ComSlider from './ComSlider';

const Community = () => {
    return (
        <div className='pb-20 h-[750px]  bg-[#C4D290] mx-[40px] rounded-xl mb-[96px]'>
            <div className='h-[632px]  mx-[40px] rounded-xl mb-[96px] '>
                <h2 className='text-[32px] font-bold text-center mb-[70px] pt-10'>Our Community</h2>
                <div className='flex justify-between items-center px-[48px]'>


                    <div className='w-[584px]'>
                        <h2 className='text-[32px] font-semibold mb-[40px]'>Join hands with us to create a sustainable future through organic farming. </h2>
                        <p className='mb-[40px]'>On our exclusive community platform, serious growers like yourself come together to meet and support one another, get answers and advice, learn from the experts, participate in growth challenges, access exclusive offers from our partners, and more.</p>
                        <button className='px-[40px] text-white font-bold py-[12px] bg-[#159122] rounded-xl'>Explore Products</button>
                    </div>

                    <div className=' w-1/2 h-auto'>
                       <ComSlider/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;