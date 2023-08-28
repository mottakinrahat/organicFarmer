import React from 'react';
import footerFrame from '../../assets/logo/Organic FarmerFooter.png';
const Footer = () => {
    return (
        <div className='h-[542px] w-full bg-[#05520D] text-white flex justify-between md:pt-[103px] pl-[94px] pr-[264px] '>

            <div>
                <img src={footerFrame} alt="" />
            </div>

            <div className='flex justify-between  gap-10'>
                <div>
                    <h2 className='font-semibold mb-2'>PAGES</h2>
                    <ul>
                        <li className='mb-1'>Members</li>
                        <li className='mb-1'>Products</li>
                        <li className='mb-1'>Community</li>
                        <li className='mb-1'>About Us</li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-semibold mb-2'>SOCIAL</h2>
                    <ul>
                        <li className='mb-1'>Facebook</li>
                        <li className='mb-1'>Instagram</li>
                        <li className='mb-1'>LinkedIn</li>
                        <li className='mb-1'>YouTube</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;