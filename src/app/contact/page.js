import Image from "next/image";
import ContactForm from "../components/contactForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact Stone Ducky to plan your visit or inquire about our menu and services. Conveniently located near St. John’s, we’re happy to help.",
};

export default async function Contact() {
  return (
    <main className=" bg-warmBeige overflow-x-hidden">
      <figure className="relative h-svh lg:h-screen w-full flex items-center justify-center z-20">
        <Image
          className="object-cover brightness-75  -z-1"
          src="/images/popular_dishes.webp"
          alt="Popular Stone Ducky dishes on a table"
          fill
          priority
        />

        <h1 className="z-10 text-white text-6xl">Contact</h1>
      </figure>
      <section className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-start w-[95%] lg:w-[80%] m-auto  pt-4 lg:gap-12 lg:py-8">
        <div className="flex flex-col text-center gap-4 min-h-[400px]">
          <h2 className="text-4xl text-center font-semibold">Contact Info</h2>
          <p>
            If you’re passionate about Italian flavors and fresh seafood, Stone
            Ducky Restaurant is your perfect destination. Just a short, scenic
            drive from St. John’s, our oceanfront location offers stunning views
            to complement every meal.
          </p>
          <p>56 St Johns Rd, Bay Bulls, NL A0A 1C0</p>
          <p>(709) 334-3825</p>
          <p>info@stoneducky.ca</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
