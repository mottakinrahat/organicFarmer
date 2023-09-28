import React from 'react';

const FarmsText = () => {
    return (
        <div className='md:flex  sm:grid-cols-2 justify-evenly items-center mt-[74px] mb-10 '>
            <div className='md:w-[400px] w-[330px] md:h-[288px] bg-[#C4D290] rounded-xl p-[40px] mx-auto md:mx-0'>
                <h2 className='text-[24px] font-semibold mb-[16px] '>Organic Practices </h2>
                <p className='text-[18px]'>We believe in the power of nature, which is why we adhere to organic farming practices. Our commitment to sustainability ensures that our produce is not only delicious but also free from harmful chemicals.</p>
            </div>
            <div className='md:w-[400px] w-[330px] md:h-[288px] bg-[#C4D290] rounded-xl p-[40px] mt-5 mx-auto md:mx-0'>
                <h2 className='text-[24px] font-semibold mb-[16px]'>Fresh and Local </h2>
                <p className='text-[18px]'>From farm to table, our produce is as fresh as it gets. By supporting Organic Farmers, you are not just buying food; you are investing in the well-being of our farmers and the health of your family.</p>
            </div>
            <div className='md:w-[400px] w-[330px] md:h-[288px] bg-[#C4D290] rounded-xl p-[40px] mt-5 sm:ml-[200px] md:ml-0 mx-auto md:mx-0'>
                <h2 className='text-[24px] font-semibold mb-[16px]'>Biodiversity</h2>
                <p className='text-[18px]'>Our farms are thriving ecosystems with diverse flora and fauna. We embrace the beauty of nature and work in harmony with it to create a sustainable future.</p>
            </div>
        </div>
    );
};

export default FarmsText;