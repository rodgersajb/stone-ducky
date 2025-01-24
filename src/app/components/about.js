import Image from "next/image";
import Link from "next/link";
import FadeInImageContainer from "./fadeInImageContainer";

export default function About() {
  return (
    <section
      id="about-section"
      className="w-full py-12 flex flex-col items-center justify-center bg-whiteBG"
    >
      <div className="flex flex-col lg:min-h-[500px] lg:grid lg:grid-cols-2 w-[90%] m-auto lg:gap-8 items-center justify-between ">
        <FadeInImageContainer className=" min-h-[250px]  w-[90%] m-auto lg:w-full">
          <Image
            src="/images/mushroom_fritter_soup.webp"
            alt="Mushroom Fritter Soup"
            height={400}
            width={600}
            className="object-cover "
            lazy="true"
          />
        </FadeInImageContainer>
        <div className=" flex flex-col items-start justify-center gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl lg:text-4xl w-2/3 lg:w-1/2  font-semibold text-mutedOrange ">
              Unique Dining Experience With Stunning Oceanfront Views
            </h3>
          </div>

          <p className="text-coolGray font-semibold ">
            Stone Ducky is a casual and intimate restaurant offering fresh,
            homemade pizza and creatively inspired dishes. Close proximity to
            the ocean provides scenic view to enhance your dining experience.
          </p>
        </div>
      </div>
    </section>
  );
}
