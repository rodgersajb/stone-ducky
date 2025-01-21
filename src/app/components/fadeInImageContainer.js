
"use client";

import { motion } from "framer-motion";

export default function FadeInImageContainer({ children, className, delay = 0.4 }) {
  return (
    <motion.figure
      className={`relative ${className}`}
      initial={{ opacity: 0  }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.figure>
  );
}