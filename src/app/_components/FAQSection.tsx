"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    question: "WHAT MAKES ZOOOOM SPECIAL?",
    answer:
      "Zoooom is made with organic ingredients, naturally fermented, and packed with probiotics. No artificial flavors, no compromises—just pure goodness in every sip!",
  },
  {
    question: "IS THERE CAFFEINE IN ZOOOOM?",
    answer:
      "Since we brew our kombucha with organic tea, it contains a small amount of natural caffeine. It’s just enough to give you a gentle energy boost—without the jitters!",
  },
  {
    question: "HOW MUCH SUGAR IS IN ZOOOOM?",
    answer:
      "Most of the sugar added during brewing is consumed by healthy bacteria in the fermentation process. The final product has just a touch of natural sweetness.",
  },
  {
    question: "CAN KIDS DRINK ZOOOOM?",
    answer:
      "Yes! Kids can enjoy it too, thanks to the low sugar and natural ingredients. But we always suggest checking with your pediatrician for little ones.",
  },
  {
    question: "HOW SHOULD I STORE ZOOOOM?",
    answer:
      "Keep it chilled! Our kombucha is alive with probiotics, so refrigeration helps maintain its freshness and benefits.",
  },
  {
    question: "CAN I DRINK ZOOOOM EVERY DAY?",
    answer:
      "Yes! Many of our fans enjoy a bottle daily as part of their healthy routine. Listen to your body and enjoy as much as you like!",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

   const kiwiRef = useRef(null);
  const orangeRef = useRef(null);

  const { scrollYProgress: kiwiScroll } = useScroll({
    target: kiwiRef,
    offset: ["start end", "end start"],
  });
  const rotateKiwi = useTransform(kiwiScroll, [0, 1], [0, 30]);

  const { scrollYProgress: orangeScroll } = useScroll({
    target: orangeRef,
    offset: ["start end", "end start"],
  });
  const rotateOrange = useTransform(orangeScroll, [0, 1], [0, 30]);

  return (
    <div className="bg-pink-300 relative px-5 lg:px-20 py-24 overflow-hidden">
     {/* Right Fruit Image (Orange) */}
      <motion.div
        ref={orangeRef}
        style={{ rotate: rotateOrange }}
        className="absolute top-10 right-5 z-20 w-[280px] h-[180px]"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/mtazqyqEhCuhZf2ATCWUOs43I.avif?updatedAt=1753009071381"
          alt="Orange Slice"
          width={280}
          height={180}
        />
      </motion.div>

      {/* Left Fruit Image (Kiwi) */}
      <motion.div
        ref={kiwiRef}
        style={{ rotate: rotateKiwi }}
        className="absolute -left-4 top-64 z-20 w-[280px] h-[180px]"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/26rDkkEPoHiNSRhg7FvTTrGP7Lg.avif?updatedAt=1753348534768"
          alt="Kiwi Slice"
          width={280}
          height={180}
        />
      </motion.div>

      {/* Discount Banner */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-indigo-800 text-white rounded-xl mb-20 relative z-10 py-5 tracking-widest px-4"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight uppercase">
          ORDER NOW AND GET A BONUS: <br />
          <span className="text-lime-300">10% OFF</span> YOUR NEXT ORDER
        </h2>
        <div className="flex items-center justify-center my-5">
          <button className="relative flex items-center gap-1 bg-[#E1F532] px-9 py-4 border-4 border-black text-base rounded-xl font-semibold text-black cursor-pointer overflow-hidden transition-all ease-custom group">
            <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4" />
            <span className="relative z-[1] text-3xl transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
              Buy Now
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
            <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4" />
          </button>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row pt-16 gap-10 z-10 relative">
        {/* Heading */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h3 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-widest">
            YOU ASK,
          </h3>
          <h4 className="text-black text-4xl md:text-5xl lg:text-8xl font-extrabold tracking-wider">
            WE ANSWER!
          </h4>
        </div>

        {/* Accordion */}
        <div className="w-full lg:w-[60%] space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className={`bg-neutral-100 rounded-3xl px-6 py-8 shadow-xl transition-all border border-black ${
                activeIndex === index ? "ring-2 ring-indigo-400" : ""
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="text-2xl md:text-3xl uppercase text-black">
                  {faq.question}
                </h5>
                <span className="text-2xl text-indigo-900">
                  {activeIndex === index ? <FaTimes /> : <FaPlus />}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-lg md:text-xl  leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
