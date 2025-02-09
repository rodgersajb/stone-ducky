"use client";

import ScrollButton from "./scrollButton";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="relative h-svh lg:h-dvh w-full flex flex-col justify-end text-white z-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Image
        className="object-cover lg:h-auto h-full brightness-75 -z-1 "
        src="/images/homepage_header_4.webp"
        alt="Summer View of the Stone Ducky Patio"
        fill
        priority={true}
      />

      <div className="lg:min-h-[75dvh] min-h-[75svh] flex flex-col gap-8 items-center justify-around z-40">
        <motion.div
          className="flex flex-col items-center justify-center lg:w-1/2 gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold drop-shadow-xl tracking-wide">
            Stone Ducky
          </h1>
          <h2 className="text-2xl lg:text-4xl px-6 py-3 font-semibold drop-shadow-lg">
            Inspired Dining with an Ocean View
          </h2>
        </motion.div>
        <ScrollButton />
      </div>
    </motion.header>
  );
}
