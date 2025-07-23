"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  quote: string;
  text: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "THE BEST KOMBUCHA I'VE EVER TRIED!",
    text: "I love how natural and refreshing it tastes. It's not too sweet, just perfectly balanced! And I feel the difference in my digestion after just a few days.",
    name: "Emma R.",
    title: "Nutritionist & Wellness Coach",
    avatar: "https://ik.imagekit.io/msmrd69gi/4gpQGqQfH948C7I4NnT96yAb3rU.avif?updatedAt=1753266531683",
  },
  {
    quote: "ENERGY BOOST WITHOUT THE CRASH!",
    text: "Zoooom gives me the perfect lift in the morning without relying on coffee. I love knowing that it's packed with probiotics and actually good for me.",
    name: "James L.",
    title: "Fitness Trainer & Entrepreneur",
    avatar: "https://ik.imagekit.io/msmrd69gi/2OJ76495WYRdNBVXHH2ObSZsEuw.avif?updatedAt=1753266532152",
  },
  {
    quote: "LOVE THE TASTE AND THE ENERGY!",
    text: "Finally a kombucha I enjoy drinking every day. I feel more energetic and it's actually helping my digestion too.",
    name: "Sophie A.",
    title: "Yoga Instructor",
    avatar: "https://ik.imagekit.io/msmrd69gi/8rlG4yox0w8UXpoOaYWvFzPZTs.avif?updatedAt=1753266531708",
  },
  {
    quote: "MY FAVORITE DAILY ROUTINE!",
    text: "Zoooom is now part of my everyday morning. It's fresh, delicious, and actually works.",
    name: "Daniel G.",
    title: "Lifestyle Blogger",
    avatar: "https://ik.imagekit.io/msmrd69gi/Yb8nDxvwZAN07pPgqJS26suXipM.avif?updatedAt=1753266532033",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const lemonRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lemonRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const nextSlide = () => {
    setDirection("right");
    setIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (slideIndex: number) => {
    setDirection(slideIndex > index / 2 ? "right" : "left");
    setIndex(slideIndex * 2);
  };

  const currentTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="bg-[#FF6316] px-5 lg:px-20 py-20 relative overflow-hidden">
      {/* Lemon Image with Scroll Rotate */}
      <motion.div
        ref={lemonRef}
        style={{ rotate }}
        className="absolute top-20 left-20 w-[250px] lg:w-[400px] z-0 pointer-events-none"
      >
        <Image
          src="https://ik.imagekit.io/msmrd69gi/niOj84Yrf0VAZUXpG69CZUWrg.avif?updatedAt=1753009070230"
          alt="Lemon"
          width={400}
          height={400}
          priority
        />
      </motion.div>

      {/* Header */}
      <div className="text-center relative z-10 mb-12 lg:mb-16">
        <h2 className="text-white text-3xl lg:text-5xl font-bold uppercase tracking-wider">
          What People Say
        </h2>
        <h1 className="text-5xl lg:text-[100px] font-black uppercase leading-[0.9] mt-2">
          About <span className="text-[#DAFF00]">Zoooom</span>
        </h1>
      </div>

      {/* Slider */}
      <div className="flex flex-col items-center relative z-10">
        <div className="flex items-center gap-4 lg:gap-8 w-full max-w-7xl">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-[#DAFF00] hover:bg-white transition rounded-full flex justify-center items-center text-black text-xl shadow-md cursor-pointer"
            aria-label="Previous testimonials"
          >
            <FaArrowLeft />
          </button>

          {/* Cards */}
          <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
            <TestimonialCard
              testimonial={currentTestimonials[0]}
              direction={direction}
              position="left"
            />
            <TestimonialCard
              testimonial={currentTestimonials[1]}
              direction={direction}
              position="right"
              isAnimated
            />
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-[#DAFF00] hover:bg-white transition rounded-full flex justify-center items-center text-black text-xl shadow-md cursor-pointer"
            aria-label="Next testimonials"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === Math.floor(index / 2)
                  ? "bg-white scale-125"
                  : "bg-[#DAFF00] opacity-60 hover:opacity-100"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  direction: "left" | "right";
  position: "left" | "right";
  isAnimated?: boolean;
}

const TestimonialCard = ({
  testimonial,
  direction,
  isAnimated = false,
}: TestimonialCardProps) => {
  const cardVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    }),
  };

  const cardContent = (
    <div className="bg-[#FDF4ED] rounded-[40px] p-8 lg:p-10 w-full lg:w-[500px] shadow-xl border-2 border-black hover:shadow-2xl transition-all duration-300 h-full">
      <h3 className="text-[#5B3AE3] font-bold text-2xl lg:text-3xl uppercase leading-tight mb-4">
        {testimonial.quote}
      </h3>
      <p className="text-black text-lg mb-6">{testimonial.text}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full border-2 border-black overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-xl">{testimonial.name}</p>
          <p className="italic text-gray-600 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );

  return isAnimated ? (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={testimonial.name}
        variants={cardVariants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        className="w-full lg:w-auto"
      >
        {cardContent}
      </motion.div>
    </AnimatePresence>
  ) : (
    <div className="w-full lg:w-auto">{cardContent}</div>
  );
};

export default TestimonialSection;
