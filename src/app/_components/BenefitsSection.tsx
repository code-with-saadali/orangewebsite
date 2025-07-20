"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BenefitCard = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <motion.div
    
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-center mx-auto my-5">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="font-bold text-center text-[#2B140E] text-3xl mb-2">
      {title}
    </h3>
  </motion.div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🌿",
      title: "Improved Digestion",
      description: "Supports gut health and regular digestion",
    },
    {
      icon: "🛡️",
      title: "Immunity Boosting",
      description: "Strengthens your natural defenses",
    },
    {
      icon: "🦠",
      title: "Natural Probiotics",
      description: "Billions of live cultures per serving",
    },
  ];

  return (
    <section className="bg-[#F6EDE4] w-full py-20 px-5 lg:px-20 overflow-hidden relative">
      <div className="flex items-center justify-between gap-40 max-lg:gap-10">
        {/* Product Image Box */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[180px_40px_180px_0px] border-2 border-black relative  max-w-md w-full h-[500px]">
            {/* Background Decorative Image */}
            <Image
              src="https://ik.imagekit.io/msmrd69gi/y92XI46m64S5gJOWOe6MA6Arl8M.avif?updatedAt=1753014301967"
              alt=""
              fill
              className="object-cover z-0 overflow-hidden rounded-[180px_40px_180px_0px]"
            />

            {/* can */}
            <div className="relative z-50 h-full flex items-center justify-center">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/yNbUcie2HCyvvKtNFvAyziYjg.avif?updatedAt=1753014260585"
                alt="Premium Kombucha Bottle"
                width={280}
                height={560}
                className="object-contain h-full w-auto drop-shadow-2xl z-50"
                priority
              />
            </div>

            {/*  Top Left Icon */}
            <div className="absolute -top-20 -left-30 z-50 border-white">
              <Image
                src="https://ik.imagekit.io/msmrd69gi/mhNj6MgIfV80SV6DGbPpLOkk.avif?updatedAt=1753014349000"
                alt="Organic Certified"
                width={264}
                height={264}
                className="object-contain -rotate-[75deg]"
              />
            </div>
          </div>
        </motion.div>

        {/* Benefits Text & Cards */}
        <motion.div
          className="w-full "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-8xl uppercase font-bold">
            The incredible <span className="text-[#FF6316]">benefits</span> of
            our kombucha
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[500px] w-full">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
         <div className="absolute top-0 -right-56">
           <Image src="https://ik.imagekit.io/msmrd69gi/MswwAB8XnYNDrd9o4g6ZHqC2MLw.avif?updatedAt=1753017651773" alt="" width={350} height={200}/>
         </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
