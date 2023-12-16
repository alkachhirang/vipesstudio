import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Wordpressimg1 from '../assets/images/png/wordpressimg-1.png';
import Wordpressimg2 from '../assets/images/png/wordpressimg-2.png';
import Wordpressimg3 from '../assets/images/png/wordpressimg-3.png';
import Wordpressimg4 from '../assets/images/png/wordpressimg-4.png';


function WordpressPartner() {
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
            <div className='pt-[69px] bg-[#f6f6f6]'>
                <div className='container lg:max-w-[1320px] md:px-6 px-4 mx-auto '>
                    <h4 className='text-black lg:max-w-[631px] ff_KonexyPersonalUse font-normal sm:text-[37px] text-[28px] lg:text-[48px]' data-aos="fade-down">Long Term WordPress Partner</h4>
                    <p className='text-[#313131] ff_Gilroy font-normal text-base lg:max-w-[693px] m-0 pt-[20px]' data-aos="fade-down">Our motto is the long-term partnership – we will not only develop your perfect website, but will be behind you through the whole process. They already trusted us:</p>
                    <div className=" sm:pt-[70px] pt-[30px] pb-[50px] sm:pb-[92px]">
                        <Slider {...settings}>
                            <div className=" flex items-center justify-center px-6 cursor-pointer">
                                <img src={Wordpressimg1} alt="Wordpressimg1" />
                            </div>
                            <div className="flex items-center justify-center px-6 cursor-pointer">
                                <img src={Wordpressimg2} alt="Wordpressimg2" />
                            </div>
                            <div className=" flex items-center justify-center px-6cursor-pointer">
                                <img src={Wordpressimg3} alt="Wordpressimg3" />
                            </div>
                            <div className=" flex items-center justify-center px-6 cursor-pointer">
                                <img src={Wordpressimg2} alt="Wordpressimg2" />
                            </div>
                            <div className=" flex items-center justify-center px-6 cursor-pointer">
                                <img src={Wordpressimg4} alt="FeaturesImg5" />
                            </div>
                            <div className=" flex items-center justify-center px-6 cursor-pointer">
                                <img src={Wordpressimg2} alt="Wordpressimg2" />
                            </div>
                            <div className=" flex items-center justify-center px-6 cursor-pointer">
                                <img src={Wordpressimg3} alt="Wordpressimg3" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WordpressPartner
