import React from 'react';
import Banner from '../Banner/Banner';
import WhyOrganic from '../WhyOrganic/WhyOrganic';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div className='bg-[#FBFFED]'>
            <Banner title={'Go Organic'} smText={'Discover the Benefits of Sustainable Agriculture for a Greener Tomorrow'} img={'https://i.ibb.co/9gVcKbw/tem.jpg'} />
            <WhyOrganic />
            <WhyUs />
        </div>
    );
};

export default Home;