import Image from "next/image";

const images = [
  {
    src: "/images/ocean-side-view.webp",
    alt: "Ocean Side View",
    title: "A Day in Bay Bulls, a Short Drive from St. John's",
  },
  {
    src: "/images/stone_ducky_patio_winter_view.webp",
    alt: "Winter Patio View",
    title: "Winter Vibes at Stone Ducky",
  },
  {
    src: "/images/stone_ducky_patio_view.webp",
    alt: "Summer Patio View",
    title: "Stone Ducky in the Summer Time",
  },
];

export default function Blogs() {
  return (
    <section className="w-full flex flex-col items-center gap-8 pt-10">
      <h2 className="text-4xl relative pb-5">From Our Blog
        <span className="absolute bottom-0 left-0 ">
                      <Image
                        src="/images/orange-highlighter.png"
                        alt="Squiggle"
                        height={40}
                        width={300}
                      />
                    </span>
      </h2>
      <p className="text-center">
        Stay up to date with recent events, promotions and things to do in Bay
        Bulls, NL
      </p>
      <ul className="grid grid-rows-3 gap-4  m-auto lg:grid-rows-1 lg:grid-cols-3 lg:w-3/4 lg:gap-8">
        {images.map((image, index) => (
          <li key={index} className="flex flex-col items-center gap-4 relative">
            <figure className="relative h-[300px] w-[300px]  brightness-75 ">
              <Image className="rounded " src={image.src} alt={image.alt} fill />
              <figcaption>{image.title}</figcaption>
            </figure>
            <h3 className="text-2xl uppercase text-whiteBG absolute font-semibold px-4 w-3/4 m-auto top-20 ">
              {image.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
