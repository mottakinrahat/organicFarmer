import React from 'react';
import BannerCom from '../BannerCom/BannerCom';
import Benifit from '../Benifit/Benifit';
import ExistingMamber from '../ExistingMamber/ExistingMamber';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
    return (
        <div className='bg-[#FBFFED]'>
            <BannerCom title={'Join Us'} smText={'Join our vibrant community of thousands of growers from all over the country sharing knowledge, support, and inspiration.'} img={'https://i.ibb.co/BjgSLW2/diverse-men-women-working-greenhouse-inspecting-green-plants-crop-pests-damage-quality-control-group.jpg'}/>

            <Benifit/>
            <ExistingMamber/>

       
           <Link to='/dashboard/farmers'> <div className='text-[32px] text-center text-[#159122] font-semibold mt-[104px] pb-10 cursor-pointer'><h2 className='border-2 border-[#159122] mx-[180px] rounded-full'>Join Us to view our complete list of members</h2></div></Link>
           </div>

    
    );
};

export default CommunityPage;