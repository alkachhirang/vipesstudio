import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturesImg1 from "../assets/images/png/slider-img-1.png";
import FeaturesImg2 from "../assets/images/png/slider-img-2.png";
import FeaturesImg3 from "../assets/images/png/slider-img-1.png";
import FeaturesImg4 from "../assets/images/png/slider-img-3.png";
import FeaturesImg5 from "../assets/images/png/slider-img-4.png";
import FeaturesImg6 from "../assets/images/png/slider-img-3.png";

const Features = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 473,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className=" bg-[#f6f6f6]">
                <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[50px] sm:pt-[100px]">
                    <h2
                        className=" ff_KonexyPersonalUse text-[30px] sm:text-[48px] text-black font-normal"
                        data-aos="fade-down-right"
                    >
                        Featured on
                    </h2>
                    <div className=" sm:pt-[70px] pt-[30px] pb-[50px] sm:pb-[92px]">
                        <Slider {...settings}>
                            <div className=" flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg1} alt="FeaturesImg1" />
                            </div>
                            <div className="flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg2} alt="FeaturesImg2" />
                            </div>
                            <div className=" flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg3} alt="FeaturesImg3" />
                            </div>
                            <div className=" flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg4} alt="FeaturesImg4" />
                            </div>
                            <div className=" flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg5} alt="FeaturesImg5" />
                            </div>
                            <div className=" flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg6} alt="FeaturesImg6" />
                            </div>
                            <div className=" flex items-center justify-center px-2 cursor-pointer">
                                <img src={FeaturesImg5} alt="FeaturesImg5" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
