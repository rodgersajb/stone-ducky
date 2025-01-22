import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaTiktok } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import FooterNav from "./footerNav";



const socialIcons = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/p/Stone-Ducky-NL-61553172230504/",
  },
  { icon: <GrInstagram />, href: "https://www.instagram.com/stoneduckynl/" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@stoneduckynl3" },
];

export default function Footer() {
  return (
    <footer className="bg-creamBG bg-contain w-full pt-8">
      <section className=" flex flex-col">
       <FooterNav />
      </section>
      <section className="w-full flex m-auto justify-around items-center pt-8 pb-4 border-t-2">
        <p className="text-sm">© Copyright 2024</p>
        <Image
          src="/images/logo_stone_ducky.png"
          alt="Stone Ducky Logo"
          width={70}
          height={60}
        />
        <ul className="flex gap-4 items-center">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <Link href={social.href} aria-label={`Visit our ${social.label} page`}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
