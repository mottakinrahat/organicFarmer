import React from 'react';

const MissionVision = () => {
    return (
        <div>
            <div className='pb-20 mt-40'>
                <div className='h-[632px]  mx-[40px] rounded-xl mb-[96px] '>

                    <div className='flex justify-between items-center pl-[96px] pr-[90px]'>

                        <div className='w-[584px]'>
                            <h2 className='text-[32px] font-semibold mb-[40px]'>Our Mission </h2>
                            <p className='mb-[40px] text-[18px]'>Our mission is to revolutionize modern agriculture by providing communities with high-quality, organically grown produce while preserving and enhancing the natural ecosystem. We aim to contribute to the global shift towards sustainable living by producing nutrient-rich, pesticide-free food that nourishes both the body and the Earth.</p>

                        </div>

                        <div className='w-1/2'>
                            <img src="https://i.ibb.co/kyqCPqP/mission-1.png" alt="" />
                        </div>

                    </div>
                    <div className='flex justify-between items-center pl-[96px] pr-[90px] mt-40'>
                        <div className='w-1/2'>
                            <img src="https://i.ibb.co/ZmvV6Cz/mission.png" alt="" />
                        </div>
                        <div className='w-[584px]'>
                            <h2 className='text-[32px] font-semibold mb-[40px]'>Our Vision </h2>
                            <p className='mb-[40px] text-[18px]'>We envision a world where organic farming becomes the norm, providing wholesome, pesticide-free sustenance that rejuvenates both people and the planet. Our goal is to inspire a sustainable revolution, fostering a healthier, more resilient global community.</p>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;