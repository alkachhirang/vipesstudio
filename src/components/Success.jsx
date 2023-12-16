import React from "react";
import RoboteImg from "../assets/images/png/Roboteimg.png";
import successImg from "../assets/images/png/success-img-1.png";

const SuccessGuides = () => {
    return (
        <>
            <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[50px] md:pt-[100px] xl:pt-[160px] sm:pt-[170px]">
                <div className=" flex flex-row flex-wrap lg:justify-end justify-center">
                    <div className=" lg:w-4/12 flex px-3">
                        <img
                            src={RoboteImg}
                            alt="RoboteImg"
                            className=" w-full max-w-[394px] h-full lg:h-[494px]"
                            data-aos="flip-left"
                        />
                    </div>
                    <div className=" lg:w-8/12 pt-6 lg:pt-0">
                        <p
                            className=" text-[#868687] ff_Gilroy font-normal text-[16px] uppercase"
                            data-aos="zoom-in-up"
                        >
                            HAVE YOU SEEN OUR MASCOT?
                        </p>
                        <h2
                            className=" text-black text-[30px] sm:text-[48px] font-normal ff_KonexyPersonalUse pb-[20px]"
                            data-aos="zoom-in-up"
                        >
                            Success Guides{" "}
                        </h2>
                        <div className="flex max-sm:flex-col gap-3" data-aos="zoom-in-up">
                            <div className="flex sm:gap-3 gap-10">
                                <button className=" hover:text-white text-[#6022ea] ff_Gilroy leading-[150%] font-normal hover:font-semibold py-[8px] px-4 text-[16px] hover:bg-[#6022EA] border border-[#6022EA] rounded-[80px] transition-all duration-500 ease-linear">
                                    Category-1
                                </button>
                                <button className=" hover:text-white text-[#6022ea] ff_Gilroy leading-[150%] font-normal hover:font-semibold py-[8px] px-4 text-[16px] hover:bg-[#6022EA] border border-[#6022EA] rounded-[80px] transition-all duration-500 ease-linear">
                                    Category-2
                                </button>
                            </div>
                            <div className="flex sm:gap-3 gap-10">
                                <button className=" hover:text-white text-[#6022ea] ff_Gilroy leading-[150%] font-normal hover:font-semibold py-[8px] px-4 text-[16px] hover:bg-[#6022EA] border border-[#6022EA] rounded-[80px] transition-all duration-500 ease-linear">
                                    Category-3
                                </button>
                                <button className=" hover:text-white text-[#6022ea] ff_Gilroy leading-[150%] font-normal hover:font-semibold py-[8px] px-4 text-[16px] hover:bg-[#6022EA] border border-[#6022EA] rounded-[80px] transition-all duration-500 ease-linear">
                                    Category-4
                                </button>
                            </div>
                        </div>
                        <div className=" flex flex-row flex-wrap justify-center lg:justify-start pt-[33px]">
                            <div className=" lg:w-1/3 md:w-1/2 w-full px-3">
                                <div
                                    className=" border-[#E3E3E3] border rounded-2xl h-100 sm:py-[15px] sm:px-[17px] p-3 cursor-pointer"
                                    data-aos="zoom-in-up"
                                >
                                    <img
                                        src={successImg}
                                        alt="successImg"
                                        className=" rounded-2xl w-full"
                                    />
                                    <h6 className=" ff_Gilroy leading-[130%] text-[24px] font-semibold text-black pt-[17px] pb-[10px]">
                                        Sit diam metus
                                    </h6>
                                    <p className=" text-black opacity-[0.7] font-normal text-[16px] ff_Gilroy leading-[150%] pb-2">
                                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                                        mattis sed.
                                    </p>
                                    <p className=" ff_Gilroy font-semibold leading-[150%] text-[16px] text-[#6022ea]">
                                        Read More....
                                    </p>
                                </div>
                            </div>
                            <div className=" lg:w-1/3 md:w-1/2 w-full py-6 md:py-0 px-3">
                                <div
                                    className=" border-[#E3E3E3] border rounded-2xl h-100 sm:py-[15px] sm:px-[17px] p-3 cursor-pointer"
                                    data-aos="zoom-in-up"
                                >
                                    <img
                                        src={successImg}
                                        alt="successImg"
                                        className=" rounded-2xl w-full"
                                    />
                                    <h6 className=" ff_Gilroy leading-[130%] text-[24px] font-semibold text-black pt-[17px] pb-[10px]">
                                        Sit diam metus
                                    </h6>
                                    <p className=" text-black opacity-[0.7] font-normal text-[16px] ff_Gilroy leading-[150%] pb-2">
                                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                                        mattis sed.
                                    </p>
                                    <p className=" ff_Gilroy font-semibold leading-[150%] text-[16px] text-[#6022ea]">
                                        Read More....
                                    </p>
                                </div>
                            </div>
                            <div className=" lg:w-1/3 md:w-1/2 w-full px-3 pt-6 lg:pt-0">
                                <div
                                    className=" border-[#E3E3E3] border rounded-2xl h-100 sm:py-[15px] sm:px-[17px] p-3 cursor-pointer"
                                    data-aos="zoom-in-up"
                                >
                                    <img
                                        src={successImg}
                                        alt="successImg"
                                        className=" rounded-2xl w-full"
                                    />
                                    <h6 className=" ff_Gilroy leading-[130%] text-[24px] font-semibold text-black pt-[17px] pb-[10px]">
                                        Sit diam metus
                                    </h6>
                                    <p className=" text-black opacity-[0.7] font-normal text-[16px] ff_Gilroy leading-[150%] pb-2">
                                        Arcu amet, consectetur vel pellentesque mattis ipsum sed
                                        mattis sed.
                                    </p>
                                    <p className=" ff_Gilroy font-semibold leading-[150%] text-[16px] text-[#6022ea]">
                                        Read More....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuccessGuides;


