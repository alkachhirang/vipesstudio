import React from 'react';
import Developmentimg from '../assets/images/png/Development-img.png';

function Development() {
    return (
        <div>
            <div className='container lg:max-w-[1320px] md:px-6 px-4 mx-auto pt-[35px] md:pt-[67px] pb-[67px]'>
                <div className='flex flex-row flex-wrap items-center justify-center'>
                    <div className='lg:w-5/12 w-full flex items-center justify-center lg:order-1 order-2'>
                        <img src={Developmentimg} alt="Developmentimg" className='w-full max-w-[550px]' data-aos="fade-right" />
                    </div>
                    <div className='lg:w-7/12 w-full flex items-end justify-center flex-col lg:order-2 order-1'>
                        <div>
                            <h4 className='ff_KonexyPersonalUse text-blacl capitalize lg:max-w-[670px] font-semibold text-[21px] sm:text-[27px] md:text-[41px] xl:text-[46px]' data-aos="fade-left"><span className='text-[#6022EA] font-normal'>Agile WordPress </span> Development Project management</h4>
                            <p className='ff_Gilroy text-black font-normal text-base lg:max-w-[670px]' data-aos="fade-left">Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                            <div className='pt-[32px]' data-aos="fade-left">
                                <button className='text-white ff_Gilroy font-semibold text-lg rounded-[80px] bg-[#6022EA] py-[10px] px-[24px] transition-all ease-linear duration-300 hover:shadow-[0_3px_20px_rgba(96,_34,_234,_1)] whitespace-nowrap cursor-pointer'>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Development
