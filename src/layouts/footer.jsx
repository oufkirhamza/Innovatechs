import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




const Footer = () => {
    return (
        <div className="bg-[#897af0] px-10 lg:px-52 lg:flex justify-around ">
            <h3 className="text-2xl font-bold text-white p-5">InnovaTechs</h3>
            <div className="p-5">
                <p className="mb-4 font-bold text-2xl">Let's connect</p>
                <p className="my-3">Morocco, Casablanca Ain sbaa 4000 </p>
                <p className="my-3">Innovatechs.solution@gmail.com</p>
                <p className="my-3">+212 699312362</p>
            </div>
            <div className="p-5">
                <p className="mb-4 font-bold text-2xl">Links</p>
                <p className="my-3">Testimonials</p>
                <p className="my-3">Why Us?</p>
                <p className="my-3">Tech News</p>
            </div>
            <div className="p-5">
                <p className="mb-4 font-bold text-2xl">Let's connect</p>
                <div className="flex gap-3">
                <TiSocialTwitter className="text-white text-[30px]  rounded-full" />
                <FaInstagramSquare className="text-white text-[30px]  rounded-full" />
                <FaFacebook className="text-white text-[30px]  rounded-full" />
                </div>

            </div>

        </div>
    );
};

export default Footer;