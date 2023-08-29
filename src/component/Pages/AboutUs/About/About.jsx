import React from 'react';
import BannerAbout from '../BannerAbout/BannerAbout';
import MissionVision from '../MissonVision/MissionVision';
import Value from '../Value/Value';
import Approch from '../Approch/Approch';

const About = () => {
    return (
        <div className='bg-[#FBFFED]'>
            <BannerAbout img={'https://i.ibb.co/99Md6WD/markus-winkler-Heq-XGxnsn-X4-unsplash-1.jpg'} title={'About Us'}/>
            <MissionVision/>
            <Value/>
            <Approch/>
        </div>
    );
};

export default About;