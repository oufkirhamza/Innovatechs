import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-alpha py-5 text-white relative">
      <h1>Innovatechs</h1>
      <div className="flex gap-5">
        <p className="cursor-pointer hover:text-teta">Why Us</p>
        <p className="cursor-pointer hover:text-teta">Case Studies</p>
        <p className="cursor-pointer hover:text-teta">Testimonials</p>
        <p className="cursor-pointer hover:text-teta">FAQ</p>
      </div>
      <button className="flex gap-3 items-center px-3 bg-teta py-2 rounded-md">
        Let's Talk <MdArrowOutward />
      </button>
    </div>
  );
};

export default Header;
