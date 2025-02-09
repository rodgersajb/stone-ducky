"use client"

import { motion } from "framer-motion"

export default function HeaderFadeContainer({ children, className = "" }) {
  return (
    <motion.header
      className={`flex flex-col items-center justify-center h-svh lg:h-dvh w-full relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.header>
  );
}