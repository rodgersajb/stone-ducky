"use client";

import ScrollButton from "./scrollButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Header() {
  return (
    <motion.header
      className="h-[70svh] lg:h-dvh w-full flex flex-col justify-center items-center text-white bg-rustic-wood z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Top: Title Image */}
      <motion.div
        className=" w-full h-[250px] flex justify-center items-start relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <Image
          src="/images/stone-ducky.png"
          alt="Stone Ducky Title"
          fill
          priority={true}
          className="w-full flex justify-center items-start relative px-4"
        />
      </motion.div>

      {/* Bottom: Watercolor Image */}
      <motion.div
        className="w-full  flex justify-center items-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Image
          src="/images/stone-ducky-brush-frame.png"
          alt="Watercolor painting of Stone Ducky Restaurant"
          width={800}
          height={500}
          priority={true}
          className="object-contain brightness-90"
        />
      </motion.div>
      <button
        className=" flex z-40 text-[#5A6B5B] font-semibold text-lg items-center justify-center gap-2 rounded-full border-4 px-2 py-1
      "
      >
        See menu <FaLongArrowAltRight />
      </button>
      {/* Optional Scroll Button */}
      {/* <ScrollButton /> */}
    </motion.header>
  );
}
