import Link from "next/link";
import TextType from './TextType';

export default function Hero() {
  return (
<div  className=" py-20  bg-[url('https://r4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-b896bd6800903c48d09c01fed852c41a.jpg')] bg-cover bg-center bg-no-repeat h-screen ">
   
    <div  className="container mx-auto px-6 md:px-12 mt-14">
        <div  className="flex flex-col md:flex-row items-center">
            <div  className="md:w-1/2 lg:w-2/3 min-h-120">
                <h1  className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                 
                       
                  Welcome to Official Dakka Nassim Booking Platform!
             
                </h1>
                <p  className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 ">
                    
                  Best Dakka in the NRW for your weedings and all the parties!
                </p>
                <div  className="flex gap-2">
                    <a href="#"  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    <a href="#"  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                        More
                    </a>
                </div>
            </div>
            <div  className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0 ml-70">
                <img src="/Logo.png" alt="Hero Image"  className="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>
  );
}