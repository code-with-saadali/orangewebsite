"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const orangeRef = useRef(null);
  const lemonRef = useRef(null);
  const canRef = useRef(null);

  // Orange Slice Scroll Rotate
  const { scrollYProgress: orangeScroll } = useScroll({
    target: orangeRef,
    offset: ["start end", "end start"],
  });
  const rotateOrange = useTransform(orangeScroll, [0, 1], [80, 110]);

  // Lemon Slice Scroll Rotate
  const { scrollYProgress: lemonScroll } = useScroll({
    target: lemonRef,
    offset: ["start end", "end start"],
  });
  const rotateLemon = useTransform(lemonScroll, [0, 1], [15, 45]);

  // Can Image Scale on Scroll
  const { scrollYProgress: canScroll } = useScroll({
    target: canRef,
    offset: ["start end", "end start"],
  });
  const scaleCan = useTransform(canScroll, [0, 1], [0.8, 1]);

  return (
    <div className="bg-[#FF6316] min-h-screen relative mt-15 overflow-hidden">
      <motion.div
        className="text text-6xl text-center text-white uppercase font-bold leading-tight py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>
          <span className="text-[#E1F532]">Zoooom</span> is a naturally fermented tea that <br /> fills you with energy and health.
        </h1>
      </motion.div>

      <motion.div
        className="flex justify-center items-center gap-16 flex-wrap"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative z-0"> 
          <motion.div ref={canRef} style={{ scale: scaleCan }} className="relative z-20">
            <Image
              src="https://ik.imagekit.io/msmrd69gi/0oFMOy5Xm89rpo0L53rzA0fpvr4.avif?updatedAt=1753009071053"
              alt="Berries Can"
              width={950}
              height={400}
              className="relative z-20"
            />
          </motion.div>

          <motion.div
            ref={orangeRef}
            style={{ rotate: rotateOrange }}
            className="absolute -top-8 -left-8 z-30"
          >
            <Image
              src="https://ik.imagekit.io/msmrd69gi/mtazqyqEhCuhZf2ATCWUOs43I.avif?updatedAt=1753009071381"
              alt="Orange Slice"
              width={380}
              height={80}
            />
          </motion.div>

          <motion.div
            ref={lemonRef}
            style={{ rotate: rotateLemon }}
            className="absolute -top-8 -right-50 z-10" 
          >
            <Image
              src="https://ik.imagekit.io/msmrd69gi/niOj84Yrf0VAZUXpG69CZUWrg.avif?updatedAt=1753009070230"
              alt="Lemon Slice"
              width={550}
              height={180}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="text text-center text-7xl uppercase text-white px-10 max-lg:px-5 mt-10 relative z-40"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>
          Each sip is a combination of ancient traditions and modern technology.
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div
        className="flex justify-center py-10 relative z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        viewport={{ once: true }}
      >
        <button className="relative flex items-center gap-1 bg-[#E1F532] px-9 py-4 border-4 border-black text-base rounded-xl font-semibold text-black cursor-pointer overflow-hidden transition-all ease-custom hover:text-black group hover:transition-all duration-700 hover:duration-700">
          <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-black" />
          <span className="relative z-[1] text-2xl transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
            Learn more
          </span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
          <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-black" />
        </button>
      </motion.div>
    </div>
  );
};

export default About;