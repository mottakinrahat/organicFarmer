import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleContact from './SingleContact';

const Contact = () => {
    const [arrayData, setArrayData] = useState([]);
    const userData = useLoaderData()
    const [showAll,setShowAll]=useState(false)

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
            <div className='flex justify-around '>
                <div className='bg-[#FFFFFF] border-2 rounded-xl'>
                    <div className='flex justify-between text-xl items-center px-8 py-5'><h2 className=' font-bold'>Personal Information</h2> <button className='text-[14px] bg-[#159122] px-4 text-white rounded-xl'>Edit</button> </div>
                    <div className=' grid grid-cols-2 justify-evenly items-center p-4 gap-0 rounded-xl w-[440px] h-auto'>
                        <div><img src={userData.photo} className='w-[100px] h-[100px] ' alt="" /></div>
                        <div>
                            <h2 className='text-[18px] mb-2'><span className='font-bold'>Name:</span> {userData?.nameOf}</h2>
                            <h2 className='text-[18px] mb-2'><span className='font-bold'>Location:</span> {userData?.location}</h2>
                            <h2 className='text-[18px]'><span className='font-bold'>Farm area:</span> {userData?.areaOfFarm}</h2>
                        </div>

                        <div className='text-[18px] pl-10 mt-20'>
                            <h2 className='font-bold'>Contact Information:</h2>
                            <h2 className='text-[18px]'><span className='font-bold'>Email_id:</span>{userData?.areaOfFarm}</h2>
                        </div>
                    </div>
                </div>


                <div className='w-4/3 bg-[#FFFFFF] border-2 rounded-xl'>
                    <h3 className='text-xl font-bold p-4'>Product listing</h3>
                   {showAll? <div className='grid grid-cols-3 gap-4 my-[20px] mx-[32px]'>
                        {
                            arrayData.map((sData, index) => <SingleContact key={index} sData={sData}></SingleContact>)
                        }
                    </div>:
                    <div className='grid grid-cols-3 gap-4 my-[20px] mx-[32px]'>
                    {
                        arrayData.slice(0,6).map((sData, index) => <SingleContact key={index} sData={sData}></SingleContact>)
                    }
                </div>
                    }
                {!showAll && <div className='text-center text-[18px] text-[#159122] font-bold'><button onClick={()=>setShowAll(true)}>See More</button></div>}
                </div>
            </div>
        </div>
    );
};

export default Contact;