"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[#FFADEB] pt-36 pb-20 max-md:pt-0 overflow-hidden min-h-screen flex items-center">
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
          className="text-white text-[80px] md:text-[180px] lg:text-[280px] font-extrabold leading-none"
        >
          ZOOOOM
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-[22px] md:text-[32px] xl:text-[80px] font-black text-black leading-snug"
        >
          THE ENERGY OF NATURE <br className="hidden md:block" /> IN EVERY BOTTLE
        </motion.p>
      </div>
    </section>
  );
}
