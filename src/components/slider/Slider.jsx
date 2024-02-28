import React from "react";
import nha from "./nha-logo.png";
import cowin from "./cowin-logo.svg";
import secured from "./secured-logo.svg";
import './Slider.css'
import SliderCard from "./SliderCard";

const Slider = () => {
    return (
        <>
            <div className="w-full h-auto mt-5" style={{zIndex:'-1'}}>
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" style={{ borderRadius: "24px" }}>
                    <div
                        className="flex-auto p-6 text-white flex flex-wrap justify-center items-center"
                        style={{ borderRadius: "24px", fontFamily: "DM Sans, sans-serif", backgroundColor: "#429CA5", }} >
                        <div className="flex flex-wrap  w-full">
                            <div className="hidden lg:flex w-full lg:w-1/2 pr-4 pl-4 order-2 px-3 justify-center items-center">
                                <SliderCard />
                            </div>
                            <div className="w-full lg:w-1/2 pr-4 pl-4 flex flex-col p-6 md:p-12 order-1 text-start lh-base" style={{ lineHeight: "86.4px", fontWeight: "500", }}>
                                <div className=" text-6xl font-bold">
                                    Open your health account
                                </div>
                                <div
                                    className="text-left fs-4 mt-10 text-2xl"
                                    style={{
                                        fontWeight: "450",
                                        lineHeight: "24px",
                                    }}
                                >
                                    Trusted more than 3Cr Indians
                                </div>
                                <div className="flex lg:hidden w-full lg:w-1/2 pr-4 pl-4 mt-4 justify-center items-center">
                                    <SliderCard />
                                </div>
                                <div className="w-full gap-4 mt-10 flex md:justify-center  justify-center lg:justify-start  md:flex-row gap-md-3 text-center">
                                    <a href='/' className='h-auto'>
                                        <img
                                            className=" object-fit-contain slider-store-image"
                                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                            alt="bn45"
                                        />
                                    </a>
                                    <a href='/' className='h-auto'>
                                        <img
                                            className=" object-fit-contain slider-store-image"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                            alt="bn45"
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-row md:gap-10 gap-20 md:mt-4 lg:mt-12 mt-10">
                                    <div className=' flex-grow-1 flex-lg-grow-0 flex flex-col justify-around items-center '>
                                        <img src={nha} className="w-full object-fit-contain " style={{ height: "2.5em" }} alt="nha" />
                                        <span className="fs-6 mt-3  lh-base text-center">NHA Approved</span>
                                    </div>
                                    <div className='  flex-grow-1 flex-lg-grow-0 flex flex-col justify-around items-center'>
                                        <img src={cowin} className="w-full object-fit-contain " style={{ height: "2.5em" }} alt="cowin" />
                                        <span className="fs-6 mt-3  lh-base text-center">Co-WIN Approved</span>
                                    </div>
                                    <div className='  flex-grow-1 flex-lg-grow-0 flex flex-col justify-around items-center'>
                                        <img src={secured} className="w-full object-fit-contain " style={{ height: "2.5em" }} alt="secured" />
                                        <span className="fs-6 mt-3  lh-base text-center">Private & Secure</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Slider;