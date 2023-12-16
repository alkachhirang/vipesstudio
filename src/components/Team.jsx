import React from 'react';
import Teamimg from '../assets/images/png/Team-img.png';

function Team() {
    return (
        <div className='bg-[#f6f6f6] pt-[50px] lg:pt-[100px] pb-[50px] xl:pb-[0]'>
            <div className='container lg:max-w-[1320px] md:px-6 px-4 mx-auto'>
                <div className='flex flex-row flex-wrap items-center justify-center'>
                    <div className='lg:w-1/2 w-full' data-aos="fade-right">
                        <h4 className='ff_KonexyPersonalUse text-black xl:text-[48px] text-[28px] md:text-[40px] font-normal '>Team Full of Stars	</h4>
                        <p className='text-black  lg:max-w-[476px] ff_Gilroy font-normal pt-[12px] m-0'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                        <div className='pt-[32px]'>
                            <button className='text-white ff_Gilroy font-semibold text-lg rounded-[80px] bg-[#6022EA] py-[10px] px-[24px] transition-all ease-linear duration-300 hover:shadow-[0_3px_20px_rgba(96,_34,_234,_1)] whitespace-nowrap cursor-pointer'>Explore</button>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full pt-[40px] lg:pt-[0]' data-aos="fade-left">
                        <img src={Teamimg} alt="Teamimg" className='rounded-[32px] xl:translate-y-24 w-full max-w-[600px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
