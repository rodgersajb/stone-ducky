import Image from "next/image";
import ContactForm from "../components/contactForm";
import HeaderFadeContainer from "../components/headerFadeContainer";


export const metadata = {
  title: "Contact",
  description:
    "Contact Stone Ducky to plan your visit or inquire about our menu and services. Conveniently located near St. John’s, we’re happy to help.",
};

export default async function Contact() {
  return (
    <main className=" bg-rustic-wood overflow-x-hidden flex flex-col">
      <h1 className="sr-only">Contact</h1>
      <HeaderFadeContainer className="h-[65svh]">
        <figure className="relative w-full h-[200px] lg:h-[350px]">
          <Image
            src="/images/contact-header.png"
            alt="Contact Stone Ducky"
            fill
            className="lg-object-cover object-contain translate-y-12"
            priority={true}
          />
        </figure>
        <figure className="relative w-full h-[250px] lg:h-[450px]">
          <Image
            className="object-cover brightness-75  "
            src="/images/ducky_whales-min.webp"
            alt="Popular Stone Ducky dishes on a table"
            fill
            priority={true}
          />
        </figure>
      </HeaderFadeContainer>
      <section className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-start w-[95%] lg:w-[80%] m-auto  pt-4 lg:gap-12 lg:py-8">
        <div className="flex flex-col text-center gap-4 min-h-[400px]">
          <h2 className="text-xl lg:text-3xl text-center font-semibold">
            Contact Stone Ducky
          </h2>
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
