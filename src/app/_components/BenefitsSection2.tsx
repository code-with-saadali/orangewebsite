"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const BenefitsSection2 = () => {
  const rightImageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rightImageRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="bg-[#F6EDE4] px-5 lg:px-20 py-20 relative overflow-hidden" id="product2">
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl uppercase font-bold">
          Only <span className="text-[#FF6316]">natural</span> ingredients
        </h1>
        <p className="text-3xl uppercase py-5">
          Our kombucha has a simple and healthy <br /> ingredients:
        </p>
      </motion.div>

      {/* Organic Tea Block */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 bg-[#E4FF1A] rounded-2xl border-3 border-black w-full lg:w-[27%] mx-auto"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/aVzUD616jr5O91QMe2mFT6C3ik.avif?updatedAt=1753170482705"
          alt="Organic Tea"
          width={300}
          height={100}
          className="mx-auto"
        />
        <p className="py-4 font-bold text-4xl text-black text-center">
          ORGANIC TEA
        </p>
      </motion.div>

      {/* Please Note Box */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="bg-[#5541BA] px-2 lg:px-14 max-md:py-4 py-8 w-full lg:max-w-6xl rounded-2xl border-3 border-black my-10">
          <h1 className="text-xl md:text-5xl max-md:text-center font-semibold text-white uppercase tracking-widest">
            Please Note!
          </h1>
          <p className="text-white text-xl md:text-3xl md:tracking-widest py-5 max-md:text-center">
            Sugar added to the drink undergoes a fermentation process <br /> and
            is completely absorbed by healthy bacteria.
          </p>
        </div>

        {/* Small Note Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-40 right-10 max-md:hidden"
        >
          <Image
            src="https://ik.imagekit.io/msmrd69gi/f2.svg?updatedAt=1753170007615"
            alt=""
            width={350}
            height={200}
          />
        </motion.div>
      </motion.div>

      {/* Right Corner Rotating Image */}
      <motion.div
        ref={rightImageRef}
        style={{ rotate }}
        className="rightimg absolute top-0 right-0 translate-x-[50%] z-0 max-md:hidden"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/iX4u7RvbCVDT1qGdF8Je1RoNM.avif?updatedAt=1753170483160"
          alt=""
          width={1000}
          height={200}
        />
      </motion.div>
    </div>
  );
};

export default BenefitsSection2;
