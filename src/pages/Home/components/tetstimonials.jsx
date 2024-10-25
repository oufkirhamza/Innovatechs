import React from "react";
import Star from "../../../components/strar";
// import client1 from "../../../assets/img/happy-client.png";
import client2 from "../../../assets/img/cient2.png";
import client3 from "../../../assets/img/client3.png";
import client4 from "../../../assets/img/client4.png";
import "./firstSection.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const TestimonialsSection = () => {
  const clients = [
    // {
    //   nom: "Kaoutar ouarighi",
    //   feedback: `The Innovatechs team was a dream to work with. They listened to our needs, delivered on time, and created a website we love `,
    // //   job: "Web developer",
    //   image: client1,
    // },
    {
      nom: "zakaria Dahar",
      feedback:
        "Our website looks amazing thanks to Innovatechs. They're professional, creative, and easy to work with.",
      //   job: "Biologist",
      image: client2,
    },
    {
      nom: "Hamza Oufkir",
      feedback:
        "We're so happy with our new website! Innovatechs made the process smooth and stress-free.",
      //   job: "Economist",
      image: client3,
    },
    {
      nom: "Achraf Gasbi",
      feedback:
        "If you're looking for a top-notch web design company, look no further than Innovatechs.",
      //   job: "Physicien",
      image: client4,
    },
  ];

  return (
    <div className="bg-alpha pb-9 px-10 lg:px-52 text-white  relative overflow-x-hidden overflow-y-hidden">
      <div className="bluri absolute -left-64 top-16 w-[300px] h-[300px] rounded-full"></div>
      <div className="bluri absolute -right-72 bottom-20 w-[400px] h-[300px] rounded-full"></div>
      <h1 className="text-teta tracking-wider">T E S T I M O N I A L S</h1>
      <div className="text-4xl flex items-center gap-3 py-5">
        <h1>Our Clients says</h1>
        <Star className="w-10" />
      </div>
      <p>Don't take our words for it, Hear it from our happy clients</p>
      <div className="h-[50vh] cursor-grab">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation]}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {clients.map((element, index) => (
            <SwiperSlide key={index}>
              <div className="mt-7 p-4 w-full flex flex-col gap-3 border border-[#f5f5f595] bg-[#f5f5f517] rounded test">
                <p className="text-center p-7">{element.feedback}</p>
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-1 "
                >
                  <img
                    width={80}
                    className="rounded-full"
                    src={element.image}
                    alt=""
                    srcset=""
                  />
                  <p className="text-xl">
                    <b>{element.nom}</b>
                  </p>
                  <p className="">{element.job}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="flex justify-center items-center gap-3 mb-5 ">
          <p className="font-bold text-[50px] but-carousel cursor-pointer focus">
            .
          </p>
          <p className="font-bold text-[50px] but-carousel cursor-pointer">.</p>
          <p className="font-bold text-[50px] but-carousel cursor-pointer">.</p>
          <p className="font-bold text-[50px] but-carousel cursor-pointer">.</p>
        </div> */}
      </div>
    </div>
  );
};
