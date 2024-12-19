import Image from "next/image";

export const metadata = {
  title: "About Us | Stone Ducky Restaurant",
  description: "Stone Ducky is a casual and intimate restaurant offering fresh, homemade pizza and creatively inspired dishes. Close proximity to the ocean provides scenic view to enhance your dining experience.",
};

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

]

export default async function About() {
  return (
    <main className="text-white ">
      <figure className="fixed inset-0 bg-ocean-side-view bg-cover brightness-80 z-0"></figure>
      <header className="h-svh lg:h-dvh flex flex-col items-center justify-center z-10 gap-8">
        
        <p className="lg:w-1/2 text-center z-10 font-semibold">
          Welcome to Bay Bulls, our home,
          where the Atlantic meets the edge of Newfoundland in a breathtaking
          embrace. At Stone Ducky, we take pride in our roots, serving up dishes
          inspired by Newfoundland’s rich culinary traditions, crafted with the
          best ingredients our waters and lands have to offer.
        </p>
       
      </header>
      <section className="flex flex-col z-10 pt-20">
        
        <ul className="grid grid-cols-2 gap-4 place-items-center w-[80%] m-auto pt-10">
            {images.map((image, index) => (
                <li key={index} className="flex items-center justify-center z-10 relative h-[400px] w-[500px]">
                <Image src={image.src} alt={image.alt} fill className="z-10 object-cover" />
               
                </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
