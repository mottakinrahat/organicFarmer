import React from 'react';
const BannerAbout = ({ upText, title, paratext,img,smText }) => {
    const bannerImgUrl = {img};
    return (
        <div className=''>
            <div className="hero h-[244px] w-full md:h-[450px]" style={{
                backgroundImage: `url(${img})`,

                height: 'full'
            }}>
                 <div className="md:hero-overlay md:bg-opacity-20 bg-black"></div>
                <div>
                    <div className="hero-content  text-white">
                        <div className="max-w-full md:flex md:gap-[168px]">
                            <div className='md:mr-20 mt-20'>
                                <p className='md:text-[24px] text-[14px] mt-[10px] mb-2 md:mb-[40px] md:mt-6'>{upText}</p>
                                <h2 className='md:text-[50px] text-4xl  md:mb-[16px] mt-4 font-semibold pt-10'>{title}</h2>

                                <p className=' md:w-[475px] mb-[54px]  text-[20px]'>{smText}</p>

                    
                            </div>
                            <div className=' md:mt-[200px]'>
                                <p className='md:w-[475px] hidden  md:block  text-[16px]'>{paratext}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAbout;