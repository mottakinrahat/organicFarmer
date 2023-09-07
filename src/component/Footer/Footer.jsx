import React from 'react';
import footerFrame from '../../assets/logo/Organic FarmerFooter.png';
const Footer = () => {
    return (
        <div className=' bg-[#05520D] text-white md:pt-[103px] pt-20 px-4 md:pl-[94px] md:pr-[264px] '>
            <div className='md:h-[300px] w-full md:flex  justify-between '>


                <div>
                    <img src={footerFrame} alt="" />
                    <ul className='text-[18px] mt-4 w-[336px] mb-20 md:mb-0'>
                        <li className='mb-5'>Address: BTH, Jhalana Doongri , Jaipur, Rajasthan 302004</li>
                        <li className='mb-5'>Email - info@organicfarmer.club</li>
                        <li className='mb-1'>Contact -9571141862</li>

                    </ul>
                </div>
                <div className='flex md:justify-between justify-evenly text-[18px]  md:gap-80 mb-[40px] md:mb-0 '>
                    <div>
                        <h2 className='font-semibold mb-2'>PAGES</h2>

                        <li className='mb-4'>Members</li>
                        <li className='mb-4'>Products</li>
                        <li className='mb-4'>Community</li>
                        <li className='mb-1'>About Us</li>

                    </div>

                    <div>
                        <h2 className='font-semibold mb-2'>SOCIAL</h2>

                        <li className='mb-4'>Facebook</li>
                        <li className='mb-4'>Instagram</li>
                        <li className='mb-4'>LinkedIn</li>
                        <li className='mb-1'>YouTube</li>

                    </div>
                </div>


            </div>
            <div className='flex justify-center items-center md:gap-40 sm:gap-20 gap-4  text-[18px] pb-20 '>
                <h3>Terms & Conditions</h3>
                <h3>Privacy Policy</h3>
            </div>
        </div>
    );
};

export default Footer;