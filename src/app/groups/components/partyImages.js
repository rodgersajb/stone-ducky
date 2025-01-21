"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PartyImages({ image, index }) {
    return (
      <motion.li
        key={index}
        className={`z-10 ${
          index === 0
            ? "col-span-2 row-span-1" 
            : index === 1
              ? "col-span-1 row-span-2" 
              : index === 2
                ? "col-span-2 row-span-1" 
                : index === 3
                  ? "col-span-1 row-span-1" 
                  : "col-span-2 row-span-1" 
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        delay={0.2}
        viewport={{ once: true }}
      >
        <Image
          className="object-cover w-full h-full z-10 rounded "
          src={image.src}
          alt={image.alt}
          height={600}
          width={800}
          lazy="true"
        />
      </motion.li>
    );
}