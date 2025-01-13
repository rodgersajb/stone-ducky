"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";

export default function PopularDishesDivider() {
  const dishRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scroll position to opacity (0 to 1 as you scroll)
  const opacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      ref={dishRef}
      className="h-[400px] lg:h-[500px] w-full flex z-10 flex-col items-center justify-center relative border-2 border-charcoal"
    >
      <Image
        className="absolute object-cover 
         -z-1"
        src="/images/popular_dishes.webp"
        alt="Floral Duck section divider"
        fill
        sizes="100vw"
      />
      <h2 className="text-5xl z-10 text-whiteBG font-semibold text-center">
        Popular Dishes
      </h2>
      <figure className="relative ">
        <Image
          src="/images/squiggle.png"
          alt="Squiggly underline"
          width={200}
          height={20}
        />
      </figure>
    </motion.div>
  );
}
