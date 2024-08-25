import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-around items-center max-[430px]:z-50 max-[430px]:fixed max-[430px]:top-0 max-[430px]:inset-x-0 bg-alpha py-5 text-white relative">
      <h1>Innovatechs</h1>
      <div
        className={`flex gap-5 max-[430px]:absolute max-[430px]:left-3 max-[430px]:flex-col duration-500 max-[430px]:bg-alpha max-[430px]:inset-x-0 max-[430px]:py-5 ${
          isOpen ? "max-[430px]:top-20" : "max-[430px]:-top-96"
        }`}
      >
        <Link className="cursor-pointer hover:text-teta">Why Us</Link>
        <Link className="cursor-pointer hover:text-teta">Case Studies</Link>
        <Link className="cursor-pointer hover:text-teta">Testimonials</Link>
        <Link className="cursor-pointer hover:text-teta">FAQ</Link>
      </div>
      <button className="flex gap-3 items-center px-3 bg-teta py-2 rounded-md">
        Let's Talk <MdArrowOutward />
      </button>
      {isOpen ? (
        <MdClose
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hidden max-[430px]:flex text-2xl z-50"
        />
      ) : (
        <TbMenu2
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hidden max-[430px]:flex text-2xl z-50"
        />
      )}
    </div>
  );
};

export default Header;
