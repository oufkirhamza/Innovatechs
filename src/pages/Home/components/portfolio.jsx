import React from "react";
import Star from "../../../components/strar";
import portfolio1 from "../../../assets/img/portfolio-1.webp"
import portfolio2 from "../../../assets/img/portfolio-2.png"
import portfolio3 from "../../../assets/img/portfolio-3.png"
import portfolio4 from "../../../assets/img/porftolio-4.jpg"
import portfolio5 from "../../../assets/img/portfolio-5.png"
import portfolio6 from "../../../assets/img/portfolio-6.webp"
import { FaLongArrowAltRight } from "react-icons/fa";


import "./firstSection.sass";

export const PortfolioSection = () => {
        const projects = [
            {
                image : portfolio1,
            },
            {
                image : portfolio2,
            },
            {
                image : portfolio3,
            },
            {
                image : portfolio4,
            },
            {
                image : portfolio5,
            },
            {
                image : portfolio6,
            }
        ]


    return (
        <div className="bg-alpha lg:px-52 px-10 text-white  relative overflow-x-hidden overflow-y-hidden">
            <div className="bluri absolute -left-64 top-16 w-[300px] h-[300px] rounded-full"></div>
            <div className="bluri absolute -right-72 bottom-20 w-[400px] h-[300px] rounded-full"></div>
            <h1 className="text-teta tracking-wider">P O R T F O L I O</h1>
            <div className="text-4xl lg:flex items-center gap-3 py-5">
                <h1>Our latest work</h1><Star className="w-10" />
            </div>
            <p className="lg:w-[70%]">
            Discover our fresher creation that showcase the power of design 
             innovation and digital ecellence.explore our latest work 
             and witness the impact we bring to every project
            </p>
            <div className="lg:flex gap-3 justify-center items-center  flex-wrap py-7">
                {projects.map((element, index)=>
                <div key={index} className="p-4 lg:w-[32%] rounded flex flex-col ">
                <div className="relative  project-container">
                    <img height="" className="h-[250px] w-[100%] rounded-lg " src={element.image} alt="" />
                    <div className="overlay bg-gray-600 opacity-30 flex justify-center items-center absolute bottom-0 w-[100%]  cursor-pointer "><span className="text-white font-bold text-center mx-1">view project </span><FaLongArrowAltRight className="mt-1" /></div>
                </div>
                </div>
                )}
            </div>

        </div>
    );
}