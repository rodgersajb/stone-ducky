"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="mb-4 ml-4 btn btn-tealGreen btn-tealGreen:hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealGreen"
      type="button"
      onClick={router.back}
    >
      {"<- Go back"}
    </button>
  );
}