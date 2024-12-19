
import Image from "next/image";
import Link from "next/link";

import MenuRouter from "./menuRouter";
export default function Menu() {
  return (
    <>
      
      <section className=" h-[800px]  lg:h-[650px] relative w-full flex flex-col items-center justify-between bg-whiteBG ">
        
        <div className=" w-full lg:w-1/2 m-auto h-2/3 rounded-lg bg-whiteBG flex flex-col items-center justify-center gap-10 z-10 ">
          <Image
          className="lg:w-1/3 w-1/4"
            src="/images/the_duck_chef.webp"
            alt="Duck Chef Icon"
            height={250}
            width={250}
          />
          <h2 className=" text-2xl px-2 lg:text-4xl text-center lg:px-8 ">
            A Vibrant Dining Experience with Fantastic Cuisine, Clear Vision,
            and Exceptional Service.
          </h2>
         <MenuRouter />
        </div>
      </section>
    </>
  );
}
