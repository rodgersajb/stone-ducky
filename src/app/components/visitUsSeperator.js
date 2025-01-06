"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";

export default function VisitUsSeparator() {
   const ref = useRef(null);

   // Track scroll position
   const { scrollYProgress } = useScroll();

   // Map scroll position to opacity (0 to 1 as you scroll)
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6], [0, 1, 0]);


  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative h-[400px] lg:h-[500px] w-full flex flex-col items-center justify-center  border-y-2 border-charcoal"
    >
      <Image
        className="-z-1 object-cover brightness-75 "
        src="/images/stone_ducky_patio_view.webp"
        alt="Stone Ducky Restaurant Patio View"
        fill
        sizes="100vw"
      />

      <h2 className=" text-5xl text-whiteBG z-10 font-semibold text-center  ">
        Visit Stone Ducky
      </h2>
      <figure className="relative ">
        <Image src="/images/squiggle.png" alt="Squiggly underline" width={200} height={20} />
      </figure>
    </motion.section>
  );
}
