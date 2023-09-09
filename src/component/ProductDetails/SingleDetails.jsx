import React from 'react';

const SingleDetails = ({farmerData}) => {
    return (
        <tr>
            <th>1</th>
            <td>{farmerData?.name}</td>
            <td>{farmerData?.number}</td>
            <td>{farmerData?.quantity}</td>
            <td>{farmerData?.location}</td>
        </tr>
    );
};

export default SingleDetails;