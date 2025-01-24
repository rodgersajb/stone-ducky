import ScrollButton from "./scrollButton";
import Image from "next/image";

export default function Header() {
    return (
        <header className="relative h-svh lg:h-dvh w-full flex flex-col justify-end text-white z-1">
                <Image
                  className="object-cover lg:h-auto h-full brightness-75 -z-1"
                  src="/images/homepage_header_4.webp"
                  alt="Summer View of the Stone Ducky Patio"
                  fill
                  priority={true}
                />
        
                <div className="lg:min-h-[75dvh] min-h-[75svh] flex flex-col gap-8 items-center justify-around z-40">
                  <h2 className="text-4xl lg:text-6xl lg:w-1/3 text-center px-4 py-2 text-white">
                    Inspired Dining with an Ocean View
                  </h2>
                  <ScrollButton />
                </div>
              </header>
    )
}