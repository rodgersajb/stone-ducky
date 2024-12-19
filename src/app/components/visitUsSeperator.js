"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";

export default function VisitUsSeparator() {
   const ref = useRef(null);

   // Track scroll position
   const { scrollYProgress } = useScroll();

   // Map scroll position to opacity (0 to 1 as you scroll)
  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.6], [0, 1, 0]);


  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative h-[400px] lg:h-[500px] w-full flex flex-col items-center justify-center  border-y-2 border-charcoal"
    >
      <Image
        className="-z-1 object-cover "
        src="/images/stone_ducky_patio_view.webp"
        alt="Stone Ducky Restaurant Patio View"
        fill
        sizes="100vw"
      />

      <h2 className=" text-4xl  bg-whiteBG text-charcoal py-4 px-8 z-10  text-center rounded-xl border border-charcoal ">
        Visit Stone Ducky
      </h2>
    </motion.section>
  );
}
