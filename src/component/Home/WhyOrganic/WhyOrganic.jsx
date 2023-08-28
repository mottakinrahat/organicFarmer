import React, { useState } from 'react';
import frame from '../../../assets/frame/organicFrame.png'

const WhyOrganic = () => {
    const [activeCollapse, setActiveCollapse] = useState({
        health: true,
        soil: false,
        environment: false,
        nutrients: false,
        resilience: false,
    });
    const handleCollapseClick = (section) => {
        setActiveCollapse((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };
    return (
        <div className='md:h-[632px] md:w-[1360px] bg-[#C4D290] mt-[33px] mx-auto rounded-xl md:flex justify-between items-center px-[56px]'>
            <div className='w-1/2'>
                <img src={frame} alt="" />
            </div>

            <div className='w-[584px]'>
                <h1 className='text-[32px] mb-[32px]'>Why Organic?</h1>
                <div className='md:ml-0 px-2 md:w-full'>
                    <div
                        onClick={() => handleCollapseClick('health')}
                        className={`collapse mb-2 ${activeCollapse.health ? 'bg-[#399C43]' : 'bg-[#29692F]  '
                            }  text-white`}
                    >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                            Healthier Produce
                        </div>
                        <div className="collapse-content">
                            <p>Organic farming avoids synthetic pesticides, herbicides, and GMOs, resulting in produce free from harmful chemicals, promoting consumer health.</p>

                        </div>
                    </div>
                    <div
                        onClick={() => handleCollapseClick('soil')}
                        className={`collapse mb-2 ${activeCollapse.soil ? 'bg-[#29692F] ' : 'bg-[#399C43]'
                            }  text-white`}
                    >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                            Soil Enrichment
                        </div>
                        <div className="collapse-content">
                            <p>Organic farming strengthens soil health using methods like changing crops, adding compost, and growing cover plants. This makes soil rich, strong, and able to hold more water.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => handleCollapseClick('environment')}
                        className={`collapse mb-2 ${activeCollapse.environment ? 'bg-[#29692F] ' : 'bg-[#399C43]'
                            }  text-white`}
                    >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Environmental Conservation
                        </div>
                        <div className="collapse-content">
                            <p>Organic farming helps nature by keeping soil healthy, safeguarding plants and animals, reducing pollution, saving water, and ensuring a safer environment for the future.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => handleCollapseClick('nutrients')}
                        className={`collapse mb-2 ${activeCollapse.nutrients ?'bg-[#29692F] ':'bg-[#399C43]'
                            }  text-white`}
                    >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Nutrient-Rich Crops
                        </div>
                        <div className="collapse-content">
                            <p>Organic crops offer more nutrients, antioxidants, and vitamins, making them tastier and more nutritious.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => handleCollapseClick('resilience')}
                        className={`collapse mb-2 ${activeCollapse.resilience ? 'bg-[#29692F] ' : 'bg-[#399C43]'
                            }  text-white`}
                    >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Resilience to Climate Change
                        </div>
                        <div className="collapse-content">
                            <p>Organic farms tend to have better resilience to extreme weather conditions due to healthier soil structure and biodiversity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyOrganic;