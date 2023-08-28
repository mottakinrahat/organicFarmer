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
        speed: 500
    };
    
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src="https://i.ibb.co/n72Tm2Y/slider-1.png" className="w-[350px] h-[316px] rounded-xl" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/tqjfnqj/slider-2.png"  className="w-[360px] h-[316px] rounded-xl" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/k6xz6Fy/slider-3.png"  className="w-[350px] h-[316px] rounded-xl" alt="" />
                </div>
               
            </Slider>
        </div>
    );
};

export default SliderCom;
