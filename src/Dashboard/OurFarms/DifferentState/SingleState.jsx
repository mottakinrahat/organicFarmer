import React from 'react';
import { TabPanel, Tabs } from 'react-tabs';

const SingleState = ({ farmer }) => {
    console.log(farmer);
    return (
    
       
                <tr className='bg-[#29692F] text-white text-[16px]'>
                    <td></td>
                    <td>{farmer.farmer_name}</td>
                    <td>{farmer.farm_area} {farmer?.unit}</td>
                    <td>{farmer.joining_year}</td>
                </tr>
      
     


    );
};

export default SingleState;