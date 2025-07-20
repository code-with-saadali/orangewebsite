"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-[#FFADEB] pt-36 pb-20 max-md:pt-0 overflow-hidden min-h-screen max-md:h-[80vh] flex items-center">
      {/* Left Orange (floating effect) */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: [20, 0, 20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] bottom-20 z-10"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/1.png?updatedAt=1752918432664"
          alt="orange left"
          width={400}
          height={220}
        />
      </motion.div>

      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] bottom-0 z-10"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/mtazqyqEhCuhZf2ATCWUOs43I.avif?updatedAt=1752912595138"
          alt="orange right"
          width={250}
          height={220}
        />
      </motion.div>

      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={{ rotate: [0, 1, -1, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-60 -right-50 z-0"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/2SdD3fgVHaMmHQLTcRywqfv6Obk.avif?updatedAt=1752912336620"
          alt="zoom can"
          width={800}
          height={500}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-white text-[90px] max-md:text-center md:text-[180px] lg:text-[280px] font-extrabold leading-none"
        >
          ZOOOOM
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-[28px] md:text-[32px] xl:text-[80px] font-black text-black leading-snug"
        >
          THE ENERGY OF NATURE <br className="hidden md:block" /> IN EVERY
          BOTTLE
        </motion.p>
      </div>
      <div className="absolute mt-10 bottom-0 left-1/2 transform -translate-x-1/2 z-20 max-md:w-full max-md:flex max-md:justify-center">
        <button className="relative flex items-center gap-1 bg-[#E1F532] px-9 py-4 border-4 border-black text-base rounded-xl font-semibold text-black cursor-pointer overflow-hidden transition-all ease-custom hover:text-black group hover:transition-all duration-700 hover:duration-700">
          <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-black"/>
          <span className="relative z-[1] text-2xl transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
            Learn more
          </span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
          <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-black"/>
        </button>
      </div>
    </section>
  );
}
