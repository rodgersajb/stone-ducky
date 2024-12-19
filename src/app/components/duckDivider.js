import Image from "next/image";

export default function DuckDivider() {
  return (
    <figure className="h-[40px] w-full relative bg-warmBeige">
      <Image
        src="/images/duck_divider.png"
        alt="Duck Divider"
        layout="fill"
        objectFit="cover"
      />
    </figure>
  );
}
