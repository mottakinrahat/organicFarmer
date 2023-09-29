import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Banner = ({ upText, title, paratext,img,smText,display }) => {
    const bannerImgUrl = {img};
    return (
        <div className=''>
            <div className="hero h-[340px] sm:h-[340px] w-full md:h-[680px]" style={{
                backgroundImage: `url(${img})`,

                height: 'full'
            }}>
                 <div className="md:hero-overlay md:bg-opacity-30 bg-black"></div>
                <div>
                    <div className="hero-content  text-white">
                        <div className="max-w-full md:flex md:gap-[168px]">
                            <div className='md:mr-20 mt-20'>
                                <p className='md:text-[24px] text-[14px] mt-[10px] mb-2 md:mb-[40px] md:mt-6'>{upText}</p>
                                <h2 className='md:text-[56px] text-[40px] md:mb-[16px] font-semibold'>{title}</h2>

                                <p className=' md:w-[475px] mb-[54px]  text-[20px]'>{smText}</p>

                               <Link to='/community'> <button className={`md:py-[12px] mb-2 py-[7px] md:px-[40px] px-[6.5px] ${display} bg-[#159122] rounded-xl text-white flex items-center mt-4 gap-2 `}>Join Our Community</button></Link>
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

export default Banner;