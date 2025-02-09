"use client";

import HeaderFadeContainer from "@/app/components/headerFadeContainer";
import ScrollButtons from "./scrollButtons";
import Image from "next/image";

export default function Header() {
    return (
         <HeaderFadeContainer className="h-svh lg:h-dvh flex flex-col items-center justify-center gap-4 w-full relative text-white text-center">
                <Image
                  src="/images/ducky_restaurant_inside.webp"
                  alt="Ducky Restaurant Inside"
                  fill
                  priority={true}
                  className="-z-1 object-cover brightness-75"
                />
                <h1 className="z-10 font-semibold text-4xl lg:text-6xl px-2">
                  Group Bookings
                </h1>
                <h3 className="z-10 text-xl lg:text-2xl font-semibold px-2">
                  Celebrations, Meetings, and Everything In Between
                </h3>
                
                <ScrollButtons />
              </HeaderFadeContainer>

    )
}