import React from "react";
import Slider from "react-slick";

const SliderCom = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "150px",
        slidesToShow: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 768, // Tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 500, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
        ],
    };
    
    return (
        <div className="hidden md:block">
            <Slider {...settings}>
                <div>
                    <img src="https://i.ibb.co/n72Tm2Y/slider-1.png" className="md:w-[350px] md:h-[316px] rounded-xl" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/tqjfnqj/slider-2.png"  className="md:w-[360px] md:h-[316px] rounded-xl" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/k6xz6Fy/slider-3.png"  className="md:w-[350px] md:h-[316px] rounded-xl" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderCom;
