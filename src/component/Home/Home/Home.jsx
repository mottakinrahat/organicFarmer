import React from 'react';
import Banner from '../Banner/Banner';
import WhyOrganic from '../WhyOrganic/WhyOrganic';
import WhyUs from '../WhyUs/WhyUs';
import Offering from '../Offering/Offering';
import Community from '../Community/Community';
import Farms from '../Farms/Farms';

const Home = () => {
    return (
        <div className='bg-[#FBFFED]'>
            <Banner title={'Go Organic'} smText={'Discover the Benefits of Sustainable Agriculture for a Greener Tomorrow'} img={'https://i.ibb.co/xFx5TPs/banner.jpg'} />
            <WhyOrganic />
            <WhyUs />
            <Offering/>
            <Farms/>
            <Community/>
        </div>
    );
};

export default Home;