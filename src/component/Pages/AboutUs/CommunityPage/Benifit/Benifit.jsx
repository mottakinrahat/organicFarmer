import React from 'react';

const Benifit = () => {
    return (
        <div className=''>
            <h2 className='text-[32px] font-bold text-center'>Benefits of Community</h2>

            <div className='flex justify-evenly items-center mt-[40px]'>
                <div className='bg-[#E8F0CA] w-[325px] h-[234px] p-[24px] rounded-xl'>
                    <h2 className='text-[20px] font-semibold mb-[16px]'>Knowledge Exchange</h2>
                    <p className='text-[14px]'>Engage in insightful discussions, webinars, and workshops led by seasoned organic farming experts. Learn the secrets of successful organic cultivation and connect with like-minded individuals.</p>
                </div>
                <div className='bg-[#E8F0CA] w-[325px] h-[234px] p-[24px] rounded-xl'>
                    <h2 className='text-[20px] font-semibold mb-[16px]'>Large no. of Farmers </h2>
                    <p className='text-[14px]'>Join a robust community of passionate farmers, dedicated to sustainable practices. Uncover the rewards of organic farming and forge meaningful connections with like-minded individuals. Let's nurture a thriving future together, one organic harvest at a time.</p>
                </div>
                <div className='bg-[#E8F0CA] w-[325px] h-[234px] p-[24px] rounded-xl'>
                    <h2 className='text-[20px] font-semibold mb-[16px]'>Access to multiple products</h2>
                    <p className='text-[14px]'>Explore a wide array of organic products, from fresh produce to unique specialties. Our platform offers easy access to a variety of wholesome options, simplifying your search for quality organic goods.</p>
                </div>
            </div>
        </div>
    );
};

export default Benifit;