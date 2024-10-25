import "./firstSection.sass";
import { MdArrowOutward } from "react-icons/md";
import Star from "../../../components/strar";

export const FirstSection = () => {
  return (
    <div className="flex flex-col bg-alpha lg:px-52 px-10 py-28 lg:py-8 text-white gap-8 relative overflow-hidden">
      <div className="bluri absolute -right-64 top-16 w-[400px] h-[300px] rounded-full"></div>
      <div className="bluri absolute -left-64 bottom-12 w-[300px] h-[300px] rounded-full"></div>
      <h1 className="text-5xl lg:text-9xl lg:text-balance font-medium">
        <span className="flex items-center gap-4">
          We develop <Star className="w-10" />{" "}
        </span>{" "}
        <span className="text-teta">amazing</span> websites for your business
        <span className="text-teta">.</span>
      </h1>
      <p className="w-[65%] text-md ">
        Discover our seamless workflow as we transform Figma designs into
        stunning Webflow websites. Explore the synergy between design and
        development for a pixel-perfect online experience.
      </p>
      <button className="flex items-center gap-2 mb-20 rounded-md border-2 border-teta px-3 py-2 w-fit text-xl">
        {" "}
        View work <MdArrowOutward />
      </button>
      {/* marquee */}
      <div className="absolute bottom-5 w-full ">
        <div className="w-full h-[8vh]">
          <ul className="scroll flex items-center gap-5">
            {Array.from({ length: 14 }).map((_, index) => (
              <div className="flex items-center" key={index}>
                <h1 className="text-6xl">Innovatechs</h1>
                <Star className="w-16" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
