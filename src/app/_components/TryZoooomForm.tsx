"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TryZoooomForm = () => {
  return (
    <section className="relative bg-[#FF6400] min-h-screen flex flex-col items-center justify-center px-4 py-20" id="try-zooom">
      <div className="relative z-10 text-center max-w-xl w-full">
        <h1 className="text-white text-6xl md:text-8xl font-bold uppercase tracking-wide">
          Try <span className="text-[#E1F532]">Zoooom</span>
        </h1>
        <p className="text-white mt-4 text-4xl">
          ORDER NOW AND GET A BONUS:{" "}
          <span className="text-[#E1F532]">10% OFF</span> YOUR NEXT ORDER!
        </p>

        {/* Form Fields */}
        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Jane Doe"
            className="w-full px-6 py-4 rounded-full border-2 border-black focus:border-none bg-[#F7EEE5] text-gray-700 text-lg font-medium placeholder-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="w-full px-6 py-4 rounded-full border-2 border-black focus:border-none bg-[#F7EEE5] text-gray-700 text-lg font-medium placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 rounded-full border-2 focus:border-none border-black bg-[#F7EEE5] text-gray-700 text-lg font-medium placeholder-gray-500 focus:outline-none"
          />

          <div className="flex items-center justify-center">
            <button className="relative flex items-center gap-1 bg-[#E1F532] px-9 py-4 border-4 border-black text-base rounded-xl font-semibold text-black cursor-pointer overflow-hidden transition-all ease-custom hover:text-black group hover:transition-all duration-700 hover:duration-700">
            <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-black" />
            <span className="relative z-[1] text-3xl transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3 font-bold">
              Order Now
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
            <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-black" />
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TryZoooomForm;
