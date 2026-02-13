"use client"

import { motion } from "framer-motion"

export default function HeaderFadeContainer({ children, className = "" }) {
  return (
    <motion.header
      className={`  lg-h-dvh lg:h-dvh w-full flex flex-col gap-8  ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.header>
  );
}