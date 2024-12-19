"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import DuckDivider from "./duckDivider";
import PopularDishesDivider from "./popularDishesDivider";

const images = [
  {
    src: "/images/mushroom-cavatappi.webp",
    alt: "Mushroom Cavatappi",
    description:
      "cream sauce, windy heights oyster mushrooms, Newlander meat Italian sausage , parmesan, toasted garlic crumble.",
  },
  {
    src: "/images/catering_biscuits.webp",
    alt: "Dauphinoise Potatoes",
    description:
      "Thinly sliced and stacked potatoes, garlic infused cream sauce.",
  },
  {
    src: "/images/the_amore.webp",
    alt: "The Amore Cocktail",
    description: "bourbon, cherry brandy, lemon, spiced cherry syrup, soda",
  },
  {
    src: "/images/catering_mushroom_fritter_soup.webp",
    alt: "Mushroom Soup with Country Fried Oyster Mushroom",
    description: "Mushroom Soup with Country Fried Oyster Mushroom",
  },
 
];


export default function Test() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, speed: 6 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => setSelectedIndex(embla.selectedScrollSnap()));
  }, [embla]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      
      <div className="bg-whiteBG h-[550px] lg:h-[400px] lg:w-1/2 w-[90%] gap-4 flex flex-col items-center justify-evenly lg:justify-center
       m-auto lg:pt-10">
        <Image className="w-1/2 lg:w-1/5" src="/images/chef_ducky.png" alt="Ducky Chef" height={150} width={150} />
        <p className="text-center text-sm lg:text-lg">
          At Stone Ducky, our inspiration for new dishes comes from a passion
          for blending fresh, locally-sourced ingredients with innovative
          culinary techniques. Each plate tells a story of creativity and care,
          crafted to deliver bold flavors and unforgettable dining experiences
          that keep our customers coming back for more. Have a look at our fan favorites and new creations.
        </p>
      </div>
      <div className="relative w-full v-vw  flex flex-col items-center justify-center">
    
        <div className="relative w-full">
          <div className="overflow-hidden w-screen max-w-full" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div className="flex-[0_0_100%] relative h-[400px]" key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover  hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 transition-opacity"></div>
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                      selectedIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h2 className="text-2xl font-semibold text-charcoal  bg-duckyLightBlue  bg-opacity-75 p-2 rounded">
                      {image.alt}
                    </h2>
                    <p className="text-lg text-charcoal mt-2 bg-duckyLightBlue  bg-opacity-75 p-2 rounded">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => embla && embla.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition ${
                  selectedIndex === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
