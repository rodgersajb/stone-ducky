import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaTiktok } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const socialIcons = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/p/Stone-Ducky-NL-61553172230504/",
  },
  { icon: <GrInstagram />, href: "https://www.instagram.com/stoneduckynl/" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@stoneduckynl3" },
];

export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className="bg-[#5A6B5B] bg-contain w-full pt-8 text-whiteBG font-semibold relative">
     
      <section className="w-full flex flex-col m-auto justify-center gap-4 items-center pt-8 pb-4 ">
        <div className="lg:text-xl text-sm text-center flex flex-col ">
          <p>56 St Johns Rd</p>
          <p>Bay Bulls, NL A0A 1C0</p>
          <p>(709) 334-3825</p>
        </div>
        <Image
          src="/images/logo_stone_ducky.png"
          alt="Stone Ducky Logo"
          width={70}
          height={60}
        />
        <ul className="flex gap-4 items-center">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <Link
                href={social.href}
                aria-label={`Visit our ${social.label} page`}
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm">© {currentYear} Stone Ducky</p>
      </section>
    </footer>
  );
}
