"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "HOW IT WORKS", href: "#product" },
  { name: "PRODUCTS", href: "#product2" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const linkVariant = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07 },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 15 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000]
        flex items-center justify-between w-[95%] lg:w-[71%]
        px-8 py-4 bg-[#E0FF2B] rounded-full border-[3px] border-black shadow-xl"
      >
        {/* Logo */}
        <Link
          href="/"
          className="xl:text-6xl text-3xl text-black whitespace-nowrap font-[800]"
        >
          ZOOOOM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 xl:gap-10 text-black text-2xl">
          {navLinks.map((l) => (
            <motion.div
              key={l.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link href={l.href} className="font-medium">
                {l.name}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FF4D00] group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <Link
              href="/"
              className="text-2xl font-semibold text-[#FF4D00] hover:text-orange-600 transition"
            >
              TRY ZOOOOM
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FF4D00] group-hover:w-full transition-all duration-300 rounded-full" />
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-black z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-[#E0FF2B] z-40 flex flex-col items-center justify-center gap-8 text-black"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            onClick={() => setOpen(false)}
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.name}
                custom={i}
                variants={linkVariant}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <Link
                  href={l.href}
                  className="text-2xl font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              custom={navLinks.length}
              variants={linkVariant}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Link
                href="/"
                className="text-2xl font-semibold text-[#FF4D00] mt-4"
                onClick={() => setOpen(false)}
              >
                TRY ZOOOOM
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
