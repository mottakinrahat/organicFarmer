import React from 'react';
import Banner from '../../component/Home/Banner/Banner';
import FarmsText from './FarmsText/FarmsText';
import DifferentState from './DifferentState/DifferentState';

const OurFarms = () => {
    return (
        <div className='bg-[#FBFFED]'>
            <Banner img={'https://i.ibb.co/qCDZ51x/aboodi-vesakaran-ip-Os-Ea5-Jqo8-unsplash.jpg'} title={'Our Farms'} smText={'Enter our world of vibrant green fields, flourishing orchards, and abundant gardens. Our farms are not mere plots of land they are living canvases where dreams bloom and lives thrive'} display={'hidden'}/>
            <FarmsText/>
            <DifferentState/>
        </div>
    );
};

export default OurFarms;