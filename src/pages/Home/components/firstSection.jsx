import { useContext } from "react";
import "./firstSection.sass";
import { MyContext } from "../../../utils/contextProvider";
import { MdArrowOutward } from "react-icons/md";

export const FirstSection = () => {
  const { star } = useContext(MyContext);
  
  return (
    <div className="flex flex-col bg-alpha px-52 py-8 text-white gap-8 relative overflow-hidden">
        <div className="bluri absolute -right-64 top-16 w-[400px] h-[300px] rounded-full"></div>
        <div className="bluri absolute -left-64 bottom-12 w-[300px] h-[300px] rounded-full"></div>
      <h1 className="text-9xl text-balance font-medium">
        <span className="flex items-center gap-4">We develop {star}</span> <span>amazing</span> websites for your business
        <span className="text-teta">.</span>
      </h1>
      <p className="w-[65%] text-md ">
        Discover our seamless workflow as we transform Figma designs into
        stunning Webflow websites. Explore the synergy between design and
        development for a pixel-perfect online experience.
      </p>
      <button className="flex items-center gap-2 rounded-md border-2 border-teta px-3 py-2 w-fit text-xl">
        {" "}
        View work <MdArrowOutward />
      </button>
    </div>
  );
};
