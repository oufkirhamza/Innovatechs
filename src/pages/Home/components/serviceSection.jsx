import React from "react";
import Star from "../../../components/strar";
import desktop from "../../../assets/img/Desktop.png";
import favories from "../../../assets/img/Fav.png";
import flag from "../../../assets/img/Flag.png";
import message from "../../../assets/img/Message.png";
import navigation from "../../../assets/img/Navigation.png";
import trophy from "../../../assets/img/Trophy.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ServiceSection = () => {
  const services = [
    {
      title: "Expertise in Figma-to-Webflow",
      description:
        "We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.",
      icon: trophy,
    },
    {
      title: "On-Page SEO Excellence",
      description:
        "We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.",
      icon: favories,
    },
    {
      title: "Interactive Magic",
      description:
        "We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.",
      icon: desktop,
    },
    {
      title: "Dedicated Project Manager",
      description:
        "We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.",
      icon: message,
    },
    {
      title: "Comprehensive Testing",
      description:
        "We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.",
      icon: navigation,
    },
    {
      title: "Timely Delivery",
      description:
        "We have a proven track record and expertise in seamlessly turning Figma designs into functional Webflow websites.",
      icon: flag,
    },
  ];
  return (
    <div className="bg-alpha px-52 text-white py-8 relative overflow-x-hidden">
      <div className="bluri absolute -right-72 top-16 w-[400px] h-[300px] rounded-full"></div>
      <div className="bluri absolute -left-64 bottom-12 w-[300px] h-[300px] rounded-full"></div>
        <Star className='absolute right-[40vw] top-24 w-3'/>
      <h1 className="text-teta tracking-wider">S E R V I C E</h1>
      <div className="text-4xl flex items-center gap-3 py-5">
        <h1>Exceeding Expectations</h1> <Star className="w-10" />
      </div>
      <p>
        We're not just another agency; we're your path to exceptional web
        projects.
      </p>
      <div className="flex gap-6 flex-wrap py-7">
        {services.map((element, index) => (
          <div className="p-4 w-[30%] flex flex-col gap-3 border border-[#f5f5f595] bg-[#f5f5f517] rounded">
            <div className="bg-[#f5f5f54c] w-[30%] rounded-lg">
              <img className="" src={element.icon} alt="" />
            </div>
            <h1 className="text-xl">{element.title}</h1>
            <p className="text-[#f5f5f5b4] text-sm">{element.description}</p>
            <div className="border rounded-lg border-delta p-3 w-fit text-3xl cursor-pointer hover:bg-delta hover:text-alpha">
              <IoIosArrowRoundForward />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
