
"use client";

import { motion } from "framer-motion";

export default function FadeInImageContainer({ children, className, delay = 0.4 }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}