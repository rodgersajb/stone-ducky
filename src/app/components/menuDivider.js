"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MenuDivider() {
  const ref = useRef(null);

  // Track scroll position
  const { scrollYProgress } = useScroll();

  // Map scroll position to opacity (0 to 1 as you scroll)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 0]);

  return (
    <motion.section
      ref={ref}
      className="h-[500px] w-full relative flex flex-col items-center justify-center border- border-charcoal"
      style={{ opacity }} // Apply the opacity transition
    >
      <Image
        className="object-cover -z-1"
        src="/images/salmon_chicken.webp"
        alt="Roasted Salmon and Chicken Dishes"
        fill
        sizes="100vw"
      />
      <h2 className="bg-whiteBG text-charcoal z-10 text-4xl font-semibold py-4 px-8 rounded uppercase border border-charcoal">
        Menu
      </h2>
    </motion.section>
  );
}
