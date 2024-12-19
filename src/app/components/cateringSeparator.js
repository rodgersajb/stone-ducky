"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function CateringSeparator() {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll();

   // Map scroll position to opacity (0 to 1 as you scroll)
   const opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 0]);
  return (
    <motion.div ref={ref} style={{opacity}} className=" w-full h-[500px] flex items-center justify-center relative border-y-2 border-charcoal">
        <Image src="/images/catering_steak.webp" alt="Catering Steak" fill className="-z-1 object-cover"/>
      <h2 className="text-4xl bg-whiteBG py-4 px-8 z-10 border border-charcoal rounded">Catering</h2>
    </motion.div>
  );
}