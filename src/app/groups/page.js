
import PartyAccordion from "./components/accordion";
import PartyForm from "./components/partyForm";
import PartyImages from "./components/partyImages";
import Header from "./components/header";

export const metadata = {
  title: "Catering ",
  description:
    "Planning an event? Stone Ducky offers full-service catering with a menu crafted to your needs. Conveniently located near St. John’s for seamless event planning",
};

const images = [
  {
    src: "/images/ducky_whales-min.webp",
    alt: "Corner view of inside Stone Ducky Restaurant with the logo and a whale mural on the wall",
  },
  {
    src: "/images/wine_glasses_liquor_bottles-min.webp",
    alt: "Wine glasses hanging and liquor bottles on a shelf",
  },
  {
    src: "/images/set_table_birds_eye.webp",
    alt: "Birds eye view of a set table with plates, utensils, and napkins and delicious Stone Ducky food and cocktails",
  },
  {
    src: "/images/restaurant_inside_patio_view-min.webp",
    alt: "Inside view of Stone Ducky Restaurant with a patio view",
  },
  {
    src: "/images/catering_caesar_salad.webp",
    alt: "Multiple caesar salad plates with house-made croutons, parmesan cheese, and bacon crumble",
  },
];

export default function LargeGroups() {
  return (
    <main className="">
     <Header />
      <section className="bg-whiteBG flex flex-col z-30 py-10">
        <ul className="grid grid-cols-3 grid-rows-3 gap-4 w-[90%] m-auto max-h-[1000px]">
          {images.map((image, index) => (
            <PartyImages image={image} index={index} key={index} />
          ))}
        </ul>
      </section>
      <div id="faq-section">
        <PartyAccordion />
      </div>
      <h2 className="lg:text-4xl text-2xl text-center pb-8">
        Submit Your Request for Your Large Party Reservation
      </h2>
      <div id="form-section">
        <PartyForm />
      </div>
    </main>
  );
}
