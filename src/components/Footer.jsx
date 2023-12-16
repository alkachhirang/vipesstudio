import React from 'react';
import Footerlogo from '../assets/images/png/Footer-logo.png';
import { FooterSearch } from './IconImg';
import { RightArrow } from './IconImg';
import { Teliphone } from './IconImg';
import { MsgIcon } from './IconImg';
import { AddressHome } from './IconImg';
import { GitHub } from './IconImg';
import { In } from './IconImg';
import { Twitter } from './IconImg';
import { Facebook } from './IconImg';
import { Instagram } from './IconImg';
import { Wikipedia } from './IconImg';


function Footer() {
    return (
        <div>
            <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[40px] sm:pt-[120px]">
                <div className="flex translate-y-[20%] py-[24px] px-[24px] sm:px-[43px] justify-between items-center sm:pb-11 shadow-[0_3px_20px_rgba(39,_0,_124,_0.50)] flex-row flex-wrap bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-[17px]">
                    <div>
                        <h2 className=" ff_KonexyPersonalUse sm:text-[48px] text-[32px] text-white font-normal pb-2">
                            Have you
                        </h2>
                        <p className=" ff_Gilroy sm:text-[24px] text-[13px] pb-4 sm:pb-0 text-white leading-[130%] font-semibold lg:max-w-[638px]">
                            read our study about Speed and Performance in WordPress?
                        </p>
                    </div>
                    <div>
                        <button className=" hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear ff_inter text-[#6022EA] text-[16px] leading-[150%] font-semibold bg-white rounded-[80px] py-[14px] px-[38px] mt-[20px] sm:mt-[0]">
                            Check It Out
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-black">
                <div className="max-w-[1320px] mx-auto md:px-6 px-4 md:pt-36 pt-20">
                    <div className="flex sm:flex-row sm:gap-0 gap-8 flex-col sm:items-center sm:justify-between">
                        <img
                            src={Footerlogo}
                            alt="Footerlogo"
                            className="w-full max-w-[176px] sm:max-w-[150px]"
                        />
                        <div className="flex justify-between bg-[#FFFFFF] py-2.5 px-5 md:min-w-[381px] max-w-[381px] rounded-[80px]">
                            <input
                                type="text"
                                className="ff_Gilroy  text-base text-[#6F6F6F] font-normal outline-none w-full"
                                placeholder="Search here...."
                            />
                            <FooterSearch />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap -mx-3 mt-12">
                        <div className=" lg:w-3/12 md:w-4/12 sm:w-1/2 w-full px-3">
                            <ul>
                                <li className="text-base text-white ff_Gilroy font-normal">
                                    Services
                                </li>
                            </ul>
                            <ul className="pt-4">
                                <li className="group">
                                    <a
                                        href="#"
                                        aria-label="linkone"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            WordPress Development
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linktwo"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            WooCommerce Development
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkthree"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            WordPress Maintenance
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkonefour"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            Speed Optimization
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkfive"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            Dedicated WordPress Developer
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3  group">
                                    <a
                                        href="#"
                                        aria-label="linksix"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            Headless WordPress Development
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkseven"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            White Label Development
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className=" lg:w-3/12 md:w-4/12 sm:w-1/2  pt-6 sm:pt-0 w-full px-3">
                            <ul>
                                <li className="text-base text-white ff_Gilroy font-normal">
                                    Services
                                </li>
                            </ul>
                            <ul className="pt-4">
                                <li className="group">
                                    <a
                                        href="#"
                                        aria-label="linkeight"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            WordPress Hosting
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linknine"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            PSD, XD, Figma to WordPress Conversion
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkten"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            Custom WordPress Theme
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkeleven"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            Custom WordPress Plugins
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkteweleve"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            CMS to WordPress
                                        </p>
                                    </a>
                                </li>
                                <li className="pt-3 group">
                                    <a
                                        href="#"
                                        aria-label="linkthreten"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <RightArrow />
                                        </span>
                                        <p className="after:w-0 after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[-4px] group-hover:after:w-full  after:duration-500 after:ease-in-out">
                                            WordPress Malware Removal
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className=" lg:w-3/12 md:w-4/12 sm:w-1/2 w-full pt-6 md:pt-0 px-3">
                            <ul>
                                <li className="text-base text-white ff_Gilroy font-normal">
                                    Latest Articles
                                </li>
                            </ul>
                            <ul className="pt-4">
                                <li>
                                    <a
                                        href="#"
                                        aria-label="linkforten"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        7 WordPress Plugins to Create an Effective Newsletter
                                        03.01.2022
                                    </a>
                                </li>
                                <li className="pt-3">
                                    <a
                                        href="#"
                                        aria-label="linkfiveten"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        What’s the Perfect Blog Post Length for Your WordPress
                                        Site’s SEO? 02.01.2022
                                    </a>
                                </li>
                                <li className="pt-3">
                                    <a
                                        href="#"
                                        aria-label="linksixten"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        5 Reasons the Future of WordPress Is Headless 01.01.2022
                                    </a>
                                </li>
                                <li className="pt-3">
                                    <a
                                        href="#"
                                        aria-label="linkseventen"
                                        className="flex items-center gap-1 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                                        Amazingly Successful 2021 30.12.2021
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 md:w-4/12 sm:w-1/2 w-full pt-6 lg:pt-0 px-3">
                            <ul>
                                <li className="text-base text-white ff_Gilroy font-normal">
                                    Contact
                                </li>
                            </ul>
                            <ul className="pt-4">
                                <li>
                                    <a
                                        href="tel:359988993128"
                                        aria-label="numberfooteronoe"
                                        target="_blank"
                                        className="flex items-center gap-3 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <Teliphone />
                                        </span>
                                        EU: +359 988 993 128
                                    </a>
                                </li>
                                <li className="pt-3">
                                    <a
                                        href="tel:+118882666917"
                                        aria-label="number-footer"
                                        target="_blank"
                                        className="flex items-center gap-3 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <Teliphone />
                                        </span>
                                        US: +1 (1 888) 266-6917
                                    </a>
                                </li>
                                <li className="pt-3">
                                    <a
                                        href="mailto:office@vipestudio.com"
                                        aria-label="mail"
                                        target="_blank"
                                        className="flex items-center gap-3 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <MsgIcon />
                                        </span>
                                        office@vipestudio.com
                                    </a>
                                </li>
                                <li className="pt-3">
                                    <a
                                        href="https://maps.app.goo.gl/xMo2vzyg5HQp7CCS6"
                                        aria-label="location"
                                        target="_blank"
                                        className="flex items-center gap-3 text-sm font-normal text-white ff_Gilroy"
                                    >
                                        <span>
                                            <AddressHome />
                                        </span>
                                        14 Srebarna, Sofia 1407, Bulgaria
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#4C4C4C] mt-20"></div>
                <div className="max-w-[1320px] mx-auto md:px-6 px-4 py-8">
                    <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-6 sm:gap-0">
                        <div>
                            <p className="text-sm font-normal text-white ff_Gilroy ">
                                © Vipe Studio 2016-2022
                            </p>
                            <div className="pt-3 flex items-center gap-[14px]">
                                <p className="text-sm font-normal text-white ff_Gilroy relative after:absolute after:w-[1px] after:h-full after:bg-white after:right-[-8px] after:max-h-[14px] after:top-1">
                                    Privacy
                                </p>
                                <p className="text-sm font-normal text-white ff_Gilroy relative after:absolute after:w-[1px] after:h-full after:bg-white after:right-[-8px] after:max-h-[14px] after:top-1">
                                    Careers
                                </p>
                                <p className="text-sm font-normal text-white ff_Gilroy relative after:absolute after:w-[1px] after:h-full after:bg-white after:right-[-8px] after:max-h-[14px] after:top-1">
                                    Media
                                </p>
                                <p className="text-sm font-normal text-white ff_Gilroy">
                                    Client Area
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            <a
                                href="https://github.com/"
                                aria-label="github"
                                target="_blank"
                                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
                            >
                                <GitHub />
                            </a>
                            <a
                                href="https://in.linkedin.com"
                                aria-label="linkedin"
                                target="_blank"
                                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
                            >
                                <In />
                            </a>
                            <a
                                href="https://twitter.com"
                                aria-label="twitter"
                                target="_blank"
                                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
                            >
                                <Twitter />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                aria-label="facebook"
                                target="_blank"
                                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                aria-label="instagram"
                                target="_blank"
                                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
                            >
                                <Instagram />
                            </a>
                            <a
                                href="https://www.wikipedia.org/"
                                aria-label="wikipedia"
                                target="_blank"
                                className="hover:-translate-y-2 transition-all duration-300 ease-linear"
                    
                            > <Wikipedia /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
