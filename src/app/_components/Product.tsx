"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ bg, can }: { bg: string; can: string }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

    return (
        <div
            ref={ref}
            className="border-3 border-black relative w-full h-[500px] rounded-3xl overflow-hidden"
        >
            {/* Background image with scale animation */}
            <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
                <Image
                    src={bg}
                    alt="Background"
                    fill
                    className="object-cover rounded-3xl"
                />
            </motion.div>

            {/* Can Image with rotate */}
            <motion.div
                style={{ rotate }}
                className="relative z-50 h-full flex items-center justify-center"
            >
                <Image
                    src={can}
                    alt="Kombucha Can"
                    width={370}
                    height={440}
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </motion.div>
        </div>
    );
};

const Product = () => {
    return (
        <div className="bg-[#FFADE6] py-20 px-5 lg:px-20 relative">
            <div className="text">
                <h1 className="lg:text-8xl text-3xl uppercase font-bold text-center tracking-wider">
                    popular products
                </h1>
            </div>

            <div className="boxes grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 mt-10">
                <ProductCard
                    bg="https://ik.imagekit.io/msmrd69gi/y92XI46m64S5gJOWOe6MA6Arl8M.avif?updatedAt=1753014301967"
                    can="https://ik.imagekit.io/msmrd69gi/3HJGCQnQOw1cO3ZK6TzNxczWNYM.avif?updatedAt=1753259668425"
                />
                <ProductCard
                    bg="https://ik.imagekit.io/msmrd69gi/3ja7Bwc5NtgENgtHcvQgYUCEXr4.avif?updatedAt=1753259668044"
                    can="https://ik.imagekit.io/msmrd69gi/yNbUcie2HCyvvKtNFvAyziYjg.avif?updatedAt=1753014260585"
                />
                <ProductCard
                    bg="https://ik.imagekit.io/msmrd69gi/oWc9PbHUUPnojg1HU0NiE65unc.avif?updatedAt=1753259668365"
                    can="https://ik.imagekit.io/msmrd69gi/pbA9wEcdNLGxBbd9ZBXh6Rp9x9E.avif?updatedAt=1753259669146"
                />
            </div>

            <div className="flex justify-center">
                <button className="relative flex items-center gap-1 bg-[#E1F532] px-9 py-4 border-4 border-black text-base rounded-xl font-semibold text-black cursor-pointer overflow-hidden transition-all ease-custom hover:text-black group hover:transition-all duration-700 hover:duration-700">
                    <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-black" />
                    <span className="relative z-[1] text-2xl transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
                        Buy Now
                    </span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
                    <FaArrowRight className="absolute w-6 fill-black z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-black" />
                </button>
            </div>
        </div>
    );
};

export default Product;
