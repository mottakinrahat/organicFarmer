import React from 'react';

const MissionVision = () => {
    return (
        <div>
            <div className='md:pb-20 md:mt-40 sm:mt-20'>
                <div className='md:h-[632px]  md:mx-[40px] sm:mx-[20px] mx-6 rounded-xl md:mb-[96px]'>

                    <div className='md:flex sm:flex justify-between items-center md:pl-[96px] md:pr-[90px]'>

                        <div className='md:w-[584px] sm:w-[318px]'>
                            <h2 className='text-[32px] font-semibold md:mb-[40px]'>Our Mission </h2>
                            <p className='mb-[40px] md:text-[18px]'>Our mission is to revolutionize modern agriculture by providing communities with high-quality, organically grown produce while preserving and enhancing the natural ecosystem. We aim to contribute to the global shift towards sustainable living by producing nutrient-rich, pesticide-free food that nourishes both the body and the Earth.</p>

                        </div>

                        <div className='md:w-1/2 sm:w-1/2'>
                            <img src="https://i.ibb.co/kyqCPqP/mission-1.png" alt="" />
                        </div>

                    </div>
                    <div className='md:flex md:mt-40 sm:mt-20 mt-10 sm:flex flex flex-col-reverse md:flex-row sm:flex-row justify-between items-center md:pl-[96px] md:pr-[90px]'>
                        <div className='md:w-1/2 sm:w-1/2'>
                            <img src="https://i.ibb.co/ZmvV6Cz/mission.png" alt="" />
                        </div>
                        <div className='md:w-[584px] sm:w-[318px]'>
                            <h2 className='text-[32px] font-semibold md:mb-[40px]'>Our Vision </h2>
                            <p className='mb-[40px] md:text-[18px]'>We envision a world where organic farming becomes the norm, providing wholesome, pesticide-free sustenance that rejuvenates both people and the planet. Our goal is to inspire a sustainable revolution, fostering a healthier, more resilient global community.</p>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;