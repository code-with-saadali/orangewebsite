"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TryZoomSection = () => {
  const canRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: canRef,
    offset: ["start end", "end start"],
  });

  const canScale = useTransform(scrollYProgress, [0, 1.5], [2, 0.1]);

  return (
    <section className="bg-[#FFADE6] px-5 lg:px-20 py-20 relative overflow-hidden">
      <div className="flex items-center max-lg:flex-col">
        {/* ─── Left Content ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[50%]"
        >
          <h1 className="text-[50px] max-md:text-center lg:text-[110px] font-black uppercase leading-[1]">
            Try the entire <br />
            <span className="text-white">Zoooom</span>{" "}
            <span className="text-black">Line!</span>
          </h1>

          {/* Text + Can */}
          <div className="md:flex gap-6 items-center">
            {/* CAN with scroll‑scale */}
            <motion.div ref={canRef} style={{ scale: canScale }}>
              <Image
                src="https://ik.imagekit.io/msmrd69gi/VxqxhiQqngygsby2hYbwi3XrE.avif?updatedAt=1753264943692"
                alt="Zoom Can"
                width={140}
                height={300}
                className="drop-shadow-xl max-md:hidden"
              />
            </motion.div>

            {/* Description + Benefits */}
            <div>
              <p className="text-xl w-full lg:max-w-lg max-lg:pt-5 max-md:text-center">
                Want to experience the variety of flavors and benefits of
                kombucha? Our tasting kit is the perfect choice for those who
                want to familiarize themselves with the Zoooom range.
              </p>

              {/* Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5 w-full lg:max-w-lg">
                {[
                  {
                    icon: "https://ik.imagekit.io/msmrd69gi/sfmFS1QQY15ARAVwTwb1KrdChCI.svg?updatedAt=1753265513099",
                    label: "Improved Digestion",
                  },
                  {
                    icon: "https://ik.imagekit.io/msmrd69gi/E4I5wl7NhgPq40S2QazLLdYzZA.svg?updatedAt=1753265513055",
                    label: "Immunity Boosting",
                  },
                  {
                    icon: "https://ik.imagekit.io/msmrd69gi/rP70Tw6c5Hs2rjc5pZZvrlPkD4.svg?updatedAt=1753265514882",
                    label: "Natural Source of Probiotics",
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Image src={b.icon} alt="" width={70} height={30} />
                    <p className="font-bold text-2xl">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Right Box Image ─── */}
        <div className="w-full lg:w-[50%] flex justify-center">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/image%201.png?updatedAt=1753264046180"
            alt="Box"
            width={840}
            height={400}
            className="object-cover lg:absolute top-0 -right-20 "
          />
        </div>
      </div>
    </section>
  );
};

export default TryZoomSection;
