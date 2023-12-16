import React from 'react';
import { useState } from 'react';
import Navlogo from '../assets/images/png/navlogo.svg';
import { Navarrow } from "./IconImg";
import { Earth } from "./IconImg";
import { Playbtn } from "./IconImg";
import { TrustPilot } from "./IconImg";
import Fivestar from '../assets/images/png/5-start-img.png';
import Trust from '../assets/images/png/trustimg.png';
import Heroimg from '../assets/images/png/hero-section-img.png';
import { SearchIcon } from "./IconImg";
import { SpinnerRefresh } from "./IconImg";

function Header() {
    const [show, setshow] = useState(true);
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden")
    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div className='bg-black'>
            <div className='container lg:max-w-[1320px] mx-auto md:px-6 px-4 '>
                <nav className='flex justify-between items-center py-[20px]'>
                    <div className='flex items-center gap-[50px]'>
                        <div>
                            <img src={Navlogo} alt="Navlogo" className='cursor-pointer' />
                        </div>
                        <ul className={`${show ? "flex flex-row gap-[20px] max-xl:fixed max-xl:justify-center transition-all max-xl:left-[-100%] max-xl:items-center max-xl:top-0 max-xl:w-full max-xl:flex-col duration-300 ease-linear max-xl:min-h-screen" : "flex ease-linear max-xl:fixed z-10 gap-[20px] transition-all duration-300 max-xl:justify-center max-xl:left-[0] max-xl:items-center max-xl:top-0 max-xl:w-full max-xl:flex-col max-xl:bg-[#6022ea] max-xl:min-h-screen"}`}>
                            <li className='group relative'><a href='' className='ff_Gilroy font-normal text-base text-white flex items-center gap-[5px]'>WordPress Solution
                                <span className='pt-[4px]'>
                                    <Navarrow />
                                </span>
                            </a>
                                <div className='absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex'>
                                    <a href='' className='w-[60px] h-[30px] text-black bg-white flex justify-center items-center ff_Gilroy text-base font-normal'>Home
                                    </a>
                                </div>
                            </li>
                            <li className='group relative'><a href='' className='ff_Gilroy font-normal text-base text-white flex items-center gap-[5px]'>Services
                                <span className='pt-[4px]'>
                                    <Navarrow />
                                </span>
                            </a>
                                <div className='absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex'>
                                    <a href='' className='w-[60px] h-[30px] text-black bg-white flex justify-center items-center ff_Gilroy text-base font-normal'>Home
                                    </a>
                                </div></li>
                            <li><a href='' className='ff_Gilroy font-normal text-base text-white flex items-center gap-[5px]'>Portfolio
                            </a></li>
                            <li className='group relative'><a href='' className='ff_Gilroy font-normal text-base text-white flex items-center gap-[5px]'>About
                                <span className='pt-[4px]'>
                                    <Navarrow />
                                </span>
                            </a>
                                <div className='absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex'>
                                    <a href='' className='w-[60px] h-[30px] text-black bg-white flex justify-center items-center ff_Gilroy text-base font-normal'>Home
                                    </a>
                                </div></li>
                            <li><a href='' className='ff_Gilroy font-normal text-base text-white flex items-center gap-[5px]'>Blog
                            </a></li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='lg:flex lg:flex-row items-center gap-[20px]'>
                            <li><a href='' className='ff_inter font-normal text-white text-sm'>1 888 266-6917 <span className='italic'>(eu?)</span></a></li>
                            <button className='text-white ff_Gilroy font-semibold text-lg rounded-[80px] bg-[#6022EA] py-[10px] px-[24px] transition-all ease-linear duration-300 hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)]'>Contact Us</button>
                            <li className='flex gap-[5px] group relative after:absolute after:w-[1px] after:h-full after:bg-[#888] after:top-0 after:left-0 pl-[10px]'>
                                <span>
                                    <Earth />
                                </span>
                                <a href='' className='ff_Gilroy font-normal text-base text-white flex items-center gap-[5px]'>Eng
                                    <span className='pt-[4px]'>
                                        <Navarrow />
                                    </span>
                                </a>
                                <div className='absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex'>
                                    <a href='' className='w-[60px] h-[30px] text-black bg-white flex justify-center items-center ff_Gilroy text-base font-normal'>Spanish
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div onClick={() => setshow(!show)} className='w-[30px] h-[30px] relative z-[11] sm:p-0 me-[10px] transition-all xl:hidden flex flex-col justify-between items-center'>
                        <span className={`${show ? "bg-white h-[4px] w-full duration-300 ease-linear transition-all" : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[50deg] translate-y-[24px]"}`}></span>
                        <span className={`${show ? "bg-white h-[4px] w-full duration-300 ease-linear transition-all" : "bg-white transition-all duration-300 ease-linear hidden "}`}></span>
                        <span className={`${show ? "bg-white h-[4px] w-full duration-300 ease-linear transition-all" : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                    </div>
                </nav>
            </div>
            <div className='container lg:max-w-[1320px] mx-auto mb-[90px] md:px-6 px-4'>
                <div className='flex flex-row flex-wrap pt-[40px] md:pt-[100px]'>
                    <div className='xl:w-1/2' data-aos="fade-right">
                        <h1 className='text-white text-[38px] sm:text-[45px] md:text-[54px] lg:text-[72px] font-normal relative after:absolute after:h-full after:w-[5px] after:top-0 after:bg-[#6022ea] after:left-0 leading-[106%] ff_KonexyPersonalUse xl:max-w-[646px] capitalize pl-3'>WordPress Development Agency</h1>

                        <p className='text-white ff_Gilroy font-bold leading-[121%] m-0 text-2xl pt-[30px]'>for Enterprise + Friendly Team	</p>
                        <p className='ff_Gilroy text-[#b2b2b2] font-normal leading-[150%] xl:max-w-[592px] text-[12px] sm:text-base m-0 md:pt-[22px] pb-[27px]'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
                        <div className='flex justify-start'>
                            <div className='flex sm:flex-row flex-col items-center  gap-[34px]'>
                                <button className='text-white ff_Gilroy font-semibold text-lg rounded-[80px] bg-[#6022EA] py-[12px] px-[40px] transition-all ease-linear duration-300 hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] whitespace-nowrap'>Get Started</button>
                                <a href='' className='flex items-center gap-[14px]'>
                                    <Playbtn />
                                    <p className='text-[#b2b2b2] font-normal text-[12px] sm:text-base ff_Gilroy whitespace-nowrap'>What is Vipe? (1min)</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-1/2 w-full flex justify-center items-center pt-[45px] xl:pt-[0] relative'>
                        <div className="w-[187.13px] h-[187.13px] bg-gradient-to-b to-[#6022EA] from-[#FA00FF] absolute rounded-full blur-[100px] right-[-10%] top-[-9%]" />
                        <div className="w-[187.13px] h-[187.13px] bg-gradient-to-b to-[#6022EA] from-[#FA00FF] absolute rounded-full blur-[100px] left-[-10%] bottom-[-9%]"></div>
                        <img src={Heroimg} alt="Heroimg" className='w-full relative z-[3]' data-aos="fade-left" />
                        <div className='bg-[#0000004d] backdrop-blur-md absolute z-[3] py-[10px] pl-[10px] sm:pl-[18px] pr-[18px] sm:pr-[28px] left-0 bottom-[3%] rounded-[15px] m-[20px] sm:m-[24px]' data-aos="fade-left">
                            <img src={Trust} alt="Trust" className='relative z-[2] sm:max-w-[107px] max-w-[70px]' />
                            <img src={Fivestar} alt="Fivestar" className='pt-[5px] sm:max-w-[179px] max-w-[80px]' />
                            <p className='sm:text-base text-[12px] font-normal ff_inter text-white pt-[8px]'>Rated 5.0 Excellent</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bottom-0 left-0 w-full  bg-[#e1ffff0d]">
                <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 sm:py-[64px] py-[40px]">
                    <div className=" flex  max-lg:flex-col items-center justify-between">
                        <div>
                            <h2
                                className=" text-white text-[31px] sm:text-[36px] lg:text-start text-center font-normal ff_KonexyPersonalUse relative pb-[16px]"
                                data-aos="fade-up-right"
                            >
                                Tell us more....
                            </h2>
                            <p
                                className=" text-white text-[16px] ff_Gilroy lg:text-start text-center max-w-[573px] font-normal"
                                data-aos="fade-up-right"
                            >
                                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                                augue in quis. Magna vel orci sem neque fringilla et lectus
                                laoreet.
                            </p>
                        </div>
                        <div className=" w-full flex flex-col lg:items-end items-center">
                            <div
                                className=" flex justify-between mt-8 lg:mt-0 items-center w-full bg-[#ffffff1a] rounded-[80px] py-[20px] pl-[33px] pr-[31px] max-w-[537px] border-[#ffffff1a] border"
                                data-aos="fade-up-left"
                            >
                                <input
                                    type="text"
                                    placeholder="What do you need assistance with?"
                                    className=" bg-transparent outline-none w-full text-[#ffffffb3] sm:text-[16px] text-[12px] ff_Gilroy leading-[150%] font-normal"
                                />
                                <SearchIcon />
                            </div>
                            <div className=" flex sm:gap-[205px] gap-[40px] pt-3">
                                <div
                                    className=" flex items-center gap-1 justify-start"
                                    data-aos="fade-up-left"
                                >
                                    <SpinnerRefresh />
                                    <p className=" text-white ff_Gilroy font-normal leading-[150%] text-[12px] sm:text-[16px]">
                                        or send us an inquire?{" "}
                                    </p>
                                </div>
                                <p
                                    className=" text-white text-[12px] sm:text-[16px] ff_Gilroy leading-[150%] font-normal"
                                    data-aos="fade-up-left"
                                >
                                    Learn more about...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
