import React from "react";
import Star from "../../../components/strar";
import { SiPowerpages } from "react-icons/si";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import "./aboutSection.sass";






export const AboutSection = () => {

    const abouts = [
        {
            icon: <SiPowerpages />,
            title: 'Landing Page',
            description: 'Premium quality screen very clean and modern',
        },
        {
            icon: <TfiLayoutSliderAlt />,
            title: 'Auto Layout',
            description: "Fully auto layout so it's easyto change and use",
        },
        {
            icon: <MdDesignServices />,
            title: 'Pixel perfect Design',
            description: 'Distance and measure using an even multiple of measures',
        },
        {
            icon: <IoSunnySharp />,
            title: 'Mobile Responsivity',
            description: 'Responsive theme make your experience more pleasurable',
        },
        {
            icon: <BsPencilSquare />,
            title: 'Easy customizable',
            description: '100% Easy to change and full customizable',
        },
        {
            icon: <FaLayerGroup />,
            title: 'Organized Layer',
            description: 'The file is named grouped and well organized',
        },

    ];



    return (

        <div className="bg-alpha lg:px-52 px-10 text-white  relative overflow-x-hidden overflow-y-hidden">
            <div className="bluri absolute -left-64 top-16 w-[300px] h-[300px] rounded-full"></div>
            <div className="bluri absolute -right-72 bottom-20 w-[400px] h-[300px] rounded-full"></div>
            <h1 className="text-teta tracking-wider">A B O U T</h1>
            <div className="text-4xl flex items-center gap-3 py-5">
                <h1>About US</h1><Star className="w-10" />
            </div>
            <p className="lg:w-[70%] ">"Welcome to Rvertex, where digital innovation meets creativity. As a premier digital agency,
                we specialize in crafting bespoke solutions tailored to elevate your online presence.
                From web design and development to digital marketing strategies,
                our team of experts is dedicated to transforming your vision into reality."</p>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-5xl my-9 font-bold">What You Will Get</h2>
                <p className="text-center lg:w-[50%]">We provide simple and clean design. Each screen has a unique component and name so it's easy to change.</p>

                <div className="lg:flex gap-9 flex-wrap py-7 justify-center items-center  ">
                    {abouts.map((element, index) =>
                        <div className="border-[#f5f5f595] bg-[#f5f5f516] rounded-lg p-7 py-14 lg:w-[30%] flex flex-col gap-3 justify-center items-center lg:m-0 m-3 ">
                            <i className="bg-[#515cd8] p-4 rounded-xl grade">{element.icon}</i>
                            <p className="text-center font-bold text-xl">{element.title}</p>
                            <p className="text-center ">{element.description}</p>
                        </div>
                    )}


                </div>

            </div>
        </div>
    );


};