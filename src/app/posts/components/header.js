"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeaderFadeContainer from "@/app/components/headerFadeContainer";

export default function Header() {
    return (
      <HeaderFadeContainer className="h-[65svh]">
        <figure className="relative w-full h-[200px] lg:h-[350px]">
          <Image
            src="/images/ducky-blog-header.png"
            alt="Stone Ducky Blog Page"
            fill
            className="lg-object-cover object-contain translate-y-12 "
            priority={true}
          />
        </figure>
        <figure className="relative w-full h-[250px]">
          <Image
            src="/images/ducky_inside_view.jpg"
            alt="Braised Beef Short Rib"
            fill
            className="lg-object-cover object-cover "
            priority={true}
          />
        </figure>
      </HeaderFadeContainer>
    );
}