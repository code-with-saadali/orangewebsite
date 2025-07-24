"use client";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Reviews = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
    });
  }, [controls]);

  return (
    <div className="relative bg-[#FEF9F2] overflow-hidden py-20 px-5 lg:px-24">
      {/* Crazy Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="https://ik.imagekit.io/msmrd69gi/Group%201.png?updatedAt=1753344173739"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
        />
        <motion.div
          animate={controls}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#FF6316]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            transition: { duration: 8, repeat: Infinity },
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-[#5541BA]/10 rounded-full blur-lg"
        />
      </div>

      {/* HEADER WITH ATTITUDE */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16 md:mb-20"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase font-extrabold tracking-tight leading-tight">
          WHERE TO FIND <span className="text-[#FF6316]">ZOOOOM</span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 h-1 bg-[#FF6316] w-32 mx-auto"
        />
      </motion.div>

      {/* CONTENT WITH ENERGY */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT COLUMN - FUN STUFF */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full space-y-10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#5541BA]">
              GET YOUR ZOOOOM FIX!
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              We&apos;re everywhere you want us to be! From cool cafes to
              happening supermarkets - just look for the{" "}
              <span className="font-bold text-[#FF6316]">ZOOOOM</span> vibe.
            </p>
          </div>

          {/* FUN LOCATION TAGS */}
          <div className="flex flex-wrap gap-3">
            {[
              "Trendy Cafés",
              "Hot Clubs",
              "Chill Supermarkets",
              "Lit Convenience Stores",
              "Dope Organic Shops",
              "Epic Gas Stations",
            ].map((tag, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="px-4 py-2 bg-white rounded-full shadow-md border-2 border-black text-sm font-bold flex items-center gap-2"
              >
                <FaMapMarkerAlt className="text-[#FF6316]" />
                {tag}
              </motion.div>
            ))}
          </div>

          {/* CRAZY CTA BUTTON */}
          <button className="relative flex items-center gap-1 bg-[#E1F532] px-9 py-4 border-4 border-black text-base rounded-xl font-semibold text-black cursor-pointer overflow-hidden transition-all ease-custom hover:text-black group hover:transition-all duration-700 hover:duration-700">
            <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-black" />
            <span className="relative z-[1] text-2xl transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
              FIND NEAREST SPOT
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
            <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-black" />
          </button>
        </motion.div>

        {/* RIGHT COLUMN - INTERACTIVE MAP */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-black hover:shadow-[0_0_30px_rgba(255,99,22,0.3)] transition-all duration-500"
        >
          <div className="relative h-[400px] md:h-[500px]">
            {/* FUN MAP MARKERS */}
            <div className="absolute top-1/4 left-1/4 z-20 w-8 h-8 bg-[#FF6316] rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
              !
            </div>
            <div className="absolute top-1/3 right-1/3 z-20 w-8 h-8 bg-[#E1F532] rounded-full flex items-center justify-center text-black font-bold shadow-lg animate-pulse">
              $
            </div>

            <iframe
              title="ZOOOOM Hotspots"
              className="w-full h-full relative z-10"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.993044999479!2d73.43393557552691!3d30.81377977487316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901f3dcd8e3ff%3A0x39f57b8c5b5ddbb!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709658438214!5m2!1sen!2s"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
