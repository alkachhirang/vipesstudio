import React from 'react';
import { Enterprise } from "./IconImg";
import { SmallMid } from "./IconImg";
import { Support } from "./IconImg";

function Integer() {
    return (
        <div className='sm:pt-[97px] pb-[65px] md:pb-[100px] pt-[40px]'>
            <div className='container mx-auto xl:max-w-[1320px] md:px-6 px-4'>
                <h4 className='font-normal lg:text-5xl text-[29px] text-black ff_KonexyPersonalUse pb-[54px]' data-aos="fade-down">Integer et nisl non</h4>
                <div className='flex flex-row flex-wrap '>
                    <div className='lg:w-1/3 lg:pr-[32px] w-full'>
                        <div className='sm:px-[38px] px-[28px] pt-[50px] sm:pt-[60px] hover:border-transparent cursor-pointer border border-[#0000001a] rounded-[16px] h-full flex flex-col justify-between hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-300 ease-linear ' data-aos="zoom-in-up">
                            <div className='flex flex-col justify-center items-center pb-[38px]'>
                                <Enterprise />
                                <p className='ff_inter text-black capitalize font-semibold text-2xl lg:max-w-[342px] text-center m-0 pt-[41px]'>Enterprise WordPress Solutions</p>
                                <p className='m-0 text-black lg:max-w-[342px] ff_Gilroy text-base font-normal text-center pt-[15px]'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                                <p className='ff_Gilroy text-base font-semibold capitalize text-[#6022EA] pt-[20px] cursor-pointer'>Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 lg:pr-[32px] w-full mt-[32px] lg:mt-[0]'>
                        <div className='sm:px-[38px] px-[28px] pt-[50px] sm:pt-[60px] hover:border-transparent cursor-pointer border border-[#0000001a] rounded-[16px] h-full flex flex-col justify-between hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-300 ease-linear' data-aos="zoom-in-up">
                            <div className='flex flex-col justify-center items-center pb-[38px]'>
                                <SmallMid />
                                <p className='ff_inter text-black capitalize font-semibold text-2xl lg:max-w-[342px] text-center m-0 pt-[41px]'>Small to Mid Size Business Development</p>
                                <p className='m-0 text-black lg:max-w-[342px] ff_Gilroy text-base font-normal text-center pt-[15px]'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                                <p className='ff_Gilroy text-base font-semibold capitalize text-[#6022EA] pt-[20px] cursor-pointer'>Learn More</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 lg:pr-[32px] w-full mt-[32px] lg:mt-[0]'>
                        <div className='sm:px-[38px] px-[28px] pt-[50px] sm:pt-[60px] hover:border-transparent cursor-pointer border border-[#0000001a] rounded-[16px] h-full flex flex-col justify-between hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-300 ease-linear' data-aos="zoom-in-up">
                            <div className='flex flex-col justify-center items-center pb-[38px]'>
                                <Support />
                                <p className='ff_inter text-black capitalize font-semibold text-2xl lg:max-w-[342px] text-center m-0 pt-[41px]'>Support & Maintenance</p>
                                <p className='m-0 text-black lg:max-w-[342px] ff_Gilroy text-base font-normal text-center pt-[15px]'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                                <p className='ff_Gilroy text-base font-semibold capitalize text-[#6022EA] pt-[20px] cursor-pointer'>Learn More</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Integer
