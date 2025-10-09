"use client"

import { motion } from "framer-motion"

export default function HeaderFadeContainer({ children, className = "" }) {
  return (
    <motion.header
      className={`flex flex-col items-center justify-center mt-14 lg-h-dvh lg:h-dvh w-full  ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.header>
  );
}