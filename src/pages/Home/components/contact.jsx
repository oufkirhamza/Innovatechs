import React from 'react';

import Star from "../../../components/strar";

export const Contact = () => {
    return (
        <section>
            <div className="bg-alpha lg:px-52 px-10 text-white  relative overflow-x-hidden overflow-y-hidden">
                <div className="bluri absolute -left-64 top-16 w-[300px] h-[300px] rounded-full"></div>
                <div className="bluri absolute -right-72 bottom-20 w-[400px] h-[300px] rounded-full"></div>
                <h1 className="text-teta tracking-wider">C O N T A C T &nbsp; U S</h1>
                <div className="text-4xl lg:flex items-center gap-3 py-5">
                    <h1>Let's Collaborate</h1><Star className="w-10" />
                </div>

                <div>
                    <div className=''>
                        <div className='   my-10 w-[96%] h-[92%] bg-opacity-60 flex  items-center justify-center' >
                            <form action="">
                                <div className='flex w-[100%]  gap-6 text-white'>
                                    <div className=' flex flex-col '>
                                        <label htmlFor="" className=' pb-1 text-xl  pl-2'>Full Name</label>
                                        <input type="text" className='bg-transparent outline-none lg:w-[30vw]  px-2 py-3 border rounded-xl ' placeholder='Joe hernandez' />
                                    </div>
                                    <div className=' flex flex-col '>
                                        <label htmlFor="" className=' pb-1 text-xl  pl-2'>Phone Number</label>
                                        <input type="number" className='bg-transparent outline-none lg:w-[30vw]  px-2 py-3 border rounded-xl ' placeholder='0623xxxxxxx' />
                                    </div>
                                </div>
                                <div className='w-[100%] flex flex-col'>
                                    <label className='mt-8    pb-1 text-xl pl-2 '  >Message</label>
                                    <textarea className='lg:w-[100%] lg:h-[20vh] bg-transparent   outline-none p-2 border rounded-xl' placeholder='Message ...' name="" id=""></textarea>
                                </div>
                                <button className=' translate-x-4 border px-6 my-8 py-2 text-lg rounded-lg bg-opacity-45 hover:bg-opacity-100'> Send</button>


                            </form>

                        </div>
                        {/* <iframe className='my-8' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37786.11888803124!2d-7.543890609778514!3d33.594187543622354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc9b5ed39c01%3A0x4db6f1381ccf8d63!2sAIN%20SBAA%2C%20Casablanca!5e1!3m2!1sfr!2sma!4v1724324774773!5m2!1sfr!2sma" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>





                {/* <div class="flex pb-20 pt-6 items-center justify-start ">
                    <div class="mx-auto w-full px-20">
                        <form action="" class="">
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <div class="grid gap-6 sm:grid-cols-2">
                                <div class="relative z-0">
                                    <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                                </div>
                                <div class="relative z-0">
                                    <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                                </div>
                                <div class="relative z-0 col-span-2">
                                    <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                                </div>
                            </div>
                            <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
                        </form>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

