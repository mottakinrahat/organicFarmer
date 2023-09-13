import React from 'react';

const SingleDetails = ({farmerData,index}) => {
    return (
        <tr className='bg-[#E8F0CA]'>
            <th>{index+1}</th>
            <td>{farmerData?.name}</td>
            <td>{farmerData?.number}</td>
            <td>{farmerData?.quantity}</td>
            <td>{farmerData?.location}</td>
        </tr>
    );
};

export default SingleDetails;