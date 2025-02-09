"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    return (
      <motion.header
        className="h-[40svh] lg:h-[60dvh] w-full relative flex flex-col items-center justify-center z-20 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/whales_houses_duck.webp"
          alt="A corner inside Stone Ducky restaurant with a whale, colorful houses and the Stone Ducky Logo displayed on the wall."
          fill
          priority={true}
          className="object-cover -z-1 brightness-75"
        />
        <h1 className="z-10 lg:text-6xl text-4xl text-whiteBG">Ducky Blog</h1>
        <h3 className="z-10 lg:text-2xl text-xl text-whiteBG font-semibold">
          What to Do on the Southern Shore
        </h3>
      </motion.header>
    );
}