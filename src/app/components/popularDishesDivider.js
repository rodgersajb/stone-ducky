"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";

export default function PopularDishesDivider() {
  const dishRef = useRef(null);
   const { scrollYProgress } = useScroll();

   // Map scroll position to opacity (0 to 1 as you scroll)
   const opacity = useTransform(scrollYProgress, [0.3, 0.5, 1], [0, 1, 0]);

  
  return (
    <motion.div
      style={{ opacity }}
      ref={dishRef}
      className="h-[500px] w-full flex my-10 flex-col items-center justify-center relative border-2 border-charcoal"
    >
      <Image
        className="absolute object-cover -z-1"
        src="/images/shareable_pizza.webp"
        alt="Floral Duck section divider"
        fill
        sizes="100vw"
      />
      <h2 className="text-4xl z-10 bg-whiteBG border border-charcoal py-4 px-8 rounded">
        Popular Dishes
      </h2>
    </motion.div>
  );
}
