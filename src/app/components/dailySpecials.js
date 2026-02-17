"use client"
import { getDailySpecial } from "@/utils/getDailySpecial";

export default function DailySpecial() {
  const special = getDailySpecial();

  return (
    <div className="p-6 rounded-xl shadow-lg bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-2">
        {special.name}'s Special
      </h2>
      <p className="text-lg">{special.special}</p>
    </div>
  );
}
