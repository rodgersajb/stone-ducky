"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    src: "/images/catering_steaks.webp",
    alt: "Striploin steaks with roasted carrots, arugula, and a balsamic glaze",
  },
  {
    src: "/images/catering_biscuits.webp",
    alt: "Biscuits with honey butter and fresh herbs",
  },
  {
    src: "/images/catering_cake.webp",
    alt: "Chocolate cake with pecans and brownie crumble",
  },
  {
    src: "/images/catering_caesar_salad.webp",
    alt: "Caesar salad homemade croutons, parmesan, and bacon crunble",
  },
  {
    src: "/images/mushroom_fritter_soup.webp",
    alt: "Mushroom fritter soup with fresh herbs",
  },
  {
    src: "/images/catering_salmon_chicken.webp",
    alt: "Pan seared salmon and over roasted chicken with roasted carrots, arugula and balsamic glaze",
  },
];

export default function CateringCarousel() {
   
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <figure className="h-[400px] lg:h-[600px] w-full m-auto relative flex">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover -z-1"
                loading="lazy"
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
