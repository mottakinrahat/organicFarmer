import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import SingleState from './SingleState';

const DifferentState = () => {
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [activeTab, setActiveTab] = useState('Haryana')
    const [farmersData, setFarmersData] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/farmerState/${activeTab}`)
            .then((res) => res.json())
            .then((data) => {
                setFarmersData(data);
            });
    }, [activeTab]);

    return (
        <div>
            <h2 className='text-[32px] text-center mb-6 '>Our Farms in different states </h2>
            <Tabs>
                <TabList className='flex justify-evenly items-center mb-10'>
                    <Tab>
                        <div
                            className={`image-container ${activeTab === 'Haryana' ? 'active drop-shadow-2xl' : 'inactive-tab'}`}
                            onClick={() => setActiveTab('Haryana')}
                        >
                            <img src="https://i.ibb.co/nQH2Jqf/39.png" className={`${activeTab==='Haryana' ? 'w-[160px] text-green-500':'w-[120px]'}`} alt="" />
                            <h2 className='text-center'>Haryana</h2>
                        </div>
                    </Tab>
                    <Tab>
                        <div
                            className={`image-container ${activeTab === 'Rajasthan' ? 'active drop-shadow-2xl' : 'inactive-tab'}`}
                            onClick={() => setActiveTab('Rajasthan')}
                        >
                            <img src="https://i.ibb.co/Xyw2NKw/29-1.png" className={`${activeTab==='Rajasthan' ? 'w-[160px] text-green-500':'w-[120px]'}`} alt="" />
                            <h2 className='text-center'>Rajasthan</h2>
                        </div>
                    </Tab>
                    <Tab>
                        <div
                            className={`image-container  ${activeTab === 'Uttar Pradesh' ? 'active drop-shadow-2xl ' : 'inactive-tab'}`}
                            onClick={() => setActiveTab('Uttar Pradesh')}
                        >
                            <img src="https://i.ibb.co/JFT3nvC/33.png" className={`${activeTab==='Uttar Pradesh' ? 'w-[160px] text-green-500':'w-[120px]'}`} alt="" />
                            <h2 className='text-center'>Uttar Pradesh</h2>
                        </div>
                    </Tab>
                    <Tab>
                        <div
                            className={`image-container ${activeTab === 'Uttrakhand' ? 'active drop-shadow-2xl ' : 'inactive-tab'}`}
                            onClick={() => setActiveTab('Uttrakhand')}
                        >
                            <img src="https://i.ibb.co/F5vf6vt/34.png" className={`${activeTab==='Uttrakhand' ? 'w-[160px] text-green-500':'w-[120px]'}`} alt="" />
                            <h2 className='text-center'>Uttrakhand</h2>
                        </div>
                    </Tab>
                </TabList>


                <div className="overflow-x-auto md:mx-[200px] sm:mx-[100px]  mt-20 mb-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-base'>
                                <th></th>
                                <th>Farmer</th>
                                <th>Farm Area</th>
                                <th>Joined us </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                farmersData.map((farmer, index) => <SingleState key={farmer._id} farmer={farmer}></SingleState>)
                            }
                        </tbody>
                    </table>
                </div>
            </Tabs>
        </div>
    );
};

export default DifferentState;
