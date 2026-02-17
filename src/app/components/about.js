import Image from "next/image";
import Link from "next/link";
import FadeInImageContainer from "./fadeInImageContainer";

export default function About() {
  return (
    <section
      id="about-section"
      className="w-full flex flex-col items-center justify-center "
    >
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
        <div className=" flex flex-col items-start justify-center gap-4 my-4 text-center lg:w-2/3">
          <p className="text-[#5A6B5B] text-sm lg:text-lg font-semibold ">
            Stone Ducky is a casual and intimate restaurant offering fresh,
            homemade pizza and creatively inspired dishes. Close proximity to
            the ocean provides scenic view to enhance your dining experience.
          </p>
        </div>
      </div>
    </section>
  );
}
