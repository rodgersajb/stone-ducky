"use client";
import Image from "next/image";
import HeaderFadeContainer from "@/app/components/headerFadeContainer";



export default function Header() {
 
    return (
        <HeaderFadeContainer>
                <Image
                  src="/images/mushroom_fritter_soup.webp"
                  alt="Mushroom Fritter Soup"
                  fill
                  priority={true}
                  className="-z-1 object-cover brightness-50"
                />
                <h1 className="text-6xl z-10 text-center text-whiteBG font-semibold">
                  Stone Ducky Catering
                </h1>
                <h2 className="text-xl z-10 text-center text-whiteBG font-semibold">
                  Tailored Catering Solutions for Gatherings Big and Small
                </h2>
                
              </HeaderFadeContainer>
    )
}