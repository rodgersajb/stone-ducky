"use client";

import ScrollButton from "./scrollButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Header() {
  return (
    <motion.header
      className="h-[65svh] lg:h-dvh w-full lg:flex lg:flex-col lg:justify-evenly lg:items-center  z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="sr-only">Stone Ducky</h1>
      {/* Top: Title Image */}
      <motion.div
        className=" w-full h-[200px] lg:h-[350px] relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <Image
          src="/images/stone-ducky.png"
          alt="Stone Ducky Title"
          fill
          priority={true}
          className="object-contain translate-y-12"
        />
      </motion.div>

      {/* Bottom: Watercolor Image */}
      <motion.div
        className="w-full  flex justify-center h-[300px] lg:h-[80%]  relative "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Image
          src="/images/stone-ducky-brush-frame.png"
          alt="Watercolor painting of Stone Ducky Restaurant"
          fill
          priority={true}
          className="object-contain  brightness-90"
        />
      </motion.div>
    </motion.header>
  );
}
