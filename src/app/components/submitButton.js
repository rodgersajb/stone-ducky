import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-duckyOrange text-whiteBG font-semibold border-2 border-duckyOrange mt-2 py-2 rounded w-full lg:w-60">
      {pending ? "Sending..." : "Submit"}
    </button>
  );
}
