import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
    const [arrayData, setArrayData] = useState([]);
    const userData=useLoaderData()

    useEffect(() => {
        fetch('http://localhost:3000/crops')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.email === userData.email);
                setArrayData(filteredData);
            })
            }, [])
    
    console.log(arrayData);
    return (
        <div className='pt-40 bg-[#FBFFED]'>
            <div className='flex justify-around items-center'>
                <div>
                    <h2>Hello world</h2>
                </div>


                <div>
                    <h3>{userData.nameOf}</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;