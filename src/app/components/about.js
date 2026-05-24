import Image from "next/image";
import Link from "next/link";
import FadeInImageContainer from "./fadeInImageContainer";

export default function About() {
  return (
    <section
      id="about-section"
      className="w-full flex flex-col items-center justify-center "
    >
      <section className="w-full h-[150px] bg-cover lg:h-[275px] lg:bg-contain bg-flying-ducks"></section>
      <div className="relative my-10 flex justify-center px-4">
        {/* subtle background accent */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[85%] h-full bg-[#A68C75]/10 blur-2xl rounded-full" />
        </div>

        <div className="relative max-w-2xl text-center">
          {/* section label */}
          <p className="text-xs tracking-[0.3em] uppercase text-[#A68C75] mb-3">
            About Us
          </p>

          {/* main text */}
          <p className="text-lg lg:text-xl leading-relaxed text-[#2f2f2f] font-medium">
            Stone Ducky is a{" "}
            <span className="text-[#5A6B5B] font-semibold">
              casual and intimate
            </span>{" "}
            restaurant offering{" "}
            <span className="text-[#5A6B5B] font-semibold">
              fresh, homemade pizza
            </span>{" "}
            and creatively inspired dishes.
            <br className="hidden lg:block" />
            <span className="block mt-3 text-base text-[#555]">
              Just steps from the ocean, enjoy a scenic dining experience that
              pairs great food with an unforgettable atmosphere.
            </span>
          </p>

          {/* decorative divider */}
          <div className="mt-6 flex justify-center">
            <div className="w-12 h-[2px] bg-[#5A6B5B]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:min-h-[500px]  w-full m-auto lg:gap-8 items-center justify-between pt-4 ">
        <FadeInImageContainer className=" min-h-[250px] w-full m-auto lg:w-full lg:h-[400px]">
          <Image
            src="/images/ducky-patio.webp"
            alt="Patio view overseeing the ocean at Stone Ducky Restaurant"
            fill
            className="object-cover brightness-75  "
            lazy="true"
          />
          <div className="flex flex-col justify-between h-full absolute top-0 left-0">
            <h3 className="text-md lg:text-3xl w-2/3 lg:w-1/2 pl-2 pt-2 font-semibold text-whiteBG ">
              Unique Dining Experience With Stunning Oceanfront Views
            </h3>
          </div>
        </FadeInImageContainer>
      </div>
    </section>
  );
}
