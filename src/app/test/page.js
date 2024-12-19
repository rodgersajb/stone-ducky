"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
const images = [
  {
    src: "/images/pastry_entree.jpg",
    alt: "Pastry Entree",
  },
  {
    src: "/images/basil_cocktail.jpg",
    alt: "Basil Cocktail",
  },
  {
    src: "/images/budha_bowl.jpg",
    alt: "Buddha Bowl",
  },
  {
    src: "/images/charcuterie.jpg",
    alt: "Charcuterie",
  },
  {
    src: "/images/colorful_salad.jpg",
    alt: "Colorful Salad",
  },
  {
    src: "/images/fresh_pasta.jpg",
    alt: "Fresh Pasta",
  },
  {
    src: "/images/pink_martini.jpg",
    alt: "Pink Martini",
  },
  {
    src: "/images/salad_soup_pasta.jpg",
    alt: "Salad Soup Pasta",
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
   
  
      <section className="relative h-dvh w-full flex flex-col items-center justify-center">
        <Image
          src="/images/ducky-blue-BG.webp"
          alt="Blue Duck Background"
          fill
        />

        <div className="relative w-full flex flex-col items-center justify-center max-w-4xl m-auto">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div className="flex-[0_0_100%] relative h-[400px]" key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-700 ${
                      selectedIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h2 className="text-xl font-semibold text-white bg-black bg-opacity-50 p-2 inline-block">
                      {image.alt}
                    </h2>
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
      </section>
  );
}
