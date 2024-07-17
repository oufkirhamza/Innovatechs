import React, { useEffect } from "react";
import Star from "../../../components/strar";
import client1 from "../../../assets/img/happy-client.png"
import client2 from "../../../assets/img/cient2.png"
import client3 from "../../../assets/img/client3.png"
import client4 from "../../../assets/img/client4.png"
import "./firstSection.sass";




export const TestimonialsSection = () => {

    const clients = [
        {
            nom: "Kaoutar ouarighi",
            feedback: `
                I am slowly learning that I will never be the person I was before.
                Things happened, and my heart was shattered.
                Pain went through me like thread through a needle,
                and roughly tacked the broken parts of me into its very colour.
                I know that this, too, will be okay one day. Like the time when
                I had forgotten how to breathe and pretended to smile just to not
                let everyone else worry about me, and then slowly I found myself smiling
                without even trying. My Mother said that if you wear a mask for too long,
                eventually it becomes a part of you.
            `,
            job: "Web developer",
            image: client1
        },
        {
            nom: "zakaria Dahar",
            feedback: "Cherebha lma o technique",
            job: "Biologist",
            image: client2
        },
        {
            nom: "Hamza Oufkir",
            feedback: "salam cv? Hamza!!",
            job: "Economist",
            image: client3
        },
        {
            nom: "Achraf Gasbi",
            feedback: "Ra 3achert lmo7jabat o katlgaha bnt l97ba",
            job: "Physicien",
            image: client4
        }
    ]




    useEffect(() => {
        const test = document.querySelectorAll('.test');
        const buttons = document.querySelectorAll('.but-carousel');

        const showTestimonial = (index) => {
            test.forEach((element, i) => {
                element.classList.toggle('hidden', i !== index);
            });
            buttons.forEach((button, i) => {
                button.classList.toggle('focus', i === index);
            });
        };

        if (test.length > 0) {
            showTestimonial(0);
        }

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => showTestimonial(index));
        });

        return () => {
            buttons.forEach((button, index) => {
                button.removeEventListener('click', () => showTestimonial(index));
            });
        };
    }, []);

    return (
        <div className="bg-alpha pb-9 px-10 lg:px-52 text-white  relative overflow-x-hidden overflow-y-hidden">
            <div className="bluri absolute -left-64 top-16 w-[300px] h-[300px] rounded-full"></div>
            <div className="bluri absolute -right-72 bottom-20 w-[400px] h-[300px] rounded-full"></div>
            <h1 className="text-teta tracking-wider">T E S T I M O N I A L S</h1>
            <div className="text-4xl flex items-center gap-3 py-5">
                <h1>Our Clients says</h1><Star className="w-10" />
            </div>
            <p>Don't take our words for it, Hear it from our happy clients</p>
            <div className="flex justify-center items-center flex-col gap-4">
                {clients.map((element, index) =>
                    <React.Fragment key={index}>
                        <div className="mt-7 p-4 w-[90%] flex flex-col gap-3 border border-[#f5f5f595] bg-[#f5f5f517] rounded test">
                            <p className="text-center p-7">
                                {element.feedback}
                            </p>
                            <div key={index} className="flex flex-col justify-center items-center gap-1 ">
                                <img width={80} className="rounded-full" src={element.image} alt="" srcset="" />
                                <p className="text-xl"><b>{element.nom}</b></p>
                                <p className="">{element.job}</p>
                            </div>
                        </div>
                    </React.Fragment>

                )}


                <div className="flex justify-center items-center gap-3 mb-5 ">
                    <p className="font-bold text-[50px] but-carousel cursor-pointer focus">.</p>
                    <p className="font-bold text-[50px] but-carousel cursor-pointer">.</p>
                    <p className="font-bold text-[50px] but-carousel cursor-pointer">.</p>
                    <p className="font-bold text-[50px] but-carousel cursor-pointer">.</p>
                </div>
            </div>
        </div>);
}